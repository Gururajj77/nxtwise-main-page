import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CaseStudyHero() {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformative Solutions, <span className="text-accent">Real Results</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Discover how our custom software solutions have helped businesses streamline operations, 
            increase efficiency, and drive growth across various industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              <Link href="#dashboards">
                Explore Dashboards
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white/20 bg-transparent hover:bg-white/10 text-white px-8 py-6 text-lg">
              <Link href="/contact">
                Get a Custom Solution
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
