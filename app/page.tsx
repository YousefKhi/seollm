import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import SEOLLMHero from "@/components/SEOLLMHero";
import SEOLLMFeatures from "@/components/SEOLLMFeatures";
import SEOLLMStats from "@/components/SEOLLMStats";
import SEOLLMPricing from "@/components/SEOLLMPricing";
import SEOLLMFooter from "@/components/SEOLLMFooter";
import FloatingDock from "@/components/ui/FloatingDock";

export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              SEOLLM
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">FAQ</a>
            </nav>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <SEOLLMHero />
      <SEOLLMFeatures />
      <SEOLLMStats />
      <SEOLLMPricing />

      <SEOLLMFooter />
      <FloatingDock />
    </main>
  );
}
