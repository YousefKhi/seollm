"use client";

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GridProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  spacing?: number;
}

export default function InteractiveGrid({ 
  className = "", 
  dotSize = 1, 
  dotColor = "#e2e8f0", 
  spacing = 30 
}: GridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cols = Math.ceil(canvas.offsetWidth / spacing);
      const rows = Math.ceil(canvas.offsetHeight / spacing);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          
          // Calculate distance from mouse
          const distance = Math.sqrt(Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2));
          const maxDistance = 150;
          
          // Determine opacity based on distance
          let opacity = 0.3;
          let size = dotSize;
          
          if (isHovering && distance < maxDistance) {
            const factor = 1 - (distance / maxDistance);
            opacity = 0.3 + (factor * 0.7);
            size = dotSize + (factor * 2);
          }

          ctx.fillStyle = dotColor.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    resizeCanvas();
    drawGrid();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resizeCanvas);

    const animationFrame = requestAnimationFrame(function animate() {
      drawGrid();
      requestAnimationFrame(animate);
    });

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePos, isHovering, dotSize, dotColor, spacing]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
} 