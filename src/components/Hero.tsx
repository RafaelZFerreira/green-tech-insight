import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ti-verde.jpg";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("o-que-e");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          TI Verde
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-95">
          A Tecnologia da Informação Verde está transformando o mundo digital em um ambiente mais sustentável e eficiente
        </p>
        <Button
          onClick={scrollToContent}
          size="lg"
          variant="secondary"
          className="animate-fade-in hover-scale"
        >
          Descubra Mais
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary-foreground opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
