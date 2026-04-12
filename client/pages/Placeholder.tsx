import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PlaceholderProps {
  title: string;
  subtitle?: string;
  message?: string;
  showBackButton?: boolean;
}

export default function Placeholder({
  title,
  subtitle,
  message,
  showBackButton = true,
}: PlaceholderProps) {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center pt-32 pb-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative element */}
          <div className="mb-8 text-6xl">🌿</div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl sm:text-2xl text-foreground/70 mb-6">
              {subtitle}
            </p>
          )}

          {message && (
            <p className="text-foreground/60 text-base sm:text-lg mb-8 leading-relaxed">
              {message}
            </p>
          )}

          {/* Default message if none provided */}
          {!message && (
            <p className="text-foreground/60 text-base sm:text-lg mb-8 leading-relaxed">
              We're crafting something special for you. Come back soon to explore this section!
            </p>
          )}

          {showBackButton && (
            <Link to="/">
              <Button size="pill" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
