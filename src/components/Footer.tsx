import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Leaf className="h-8 w-8" />
            <h3 className="text-3xl font-bold">TI Verde</h3>
          </div>
          <p className="text-lg mb-6 opacity-90">
            Juntos por um futuro tecnológico mais sustentável
          </p>
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} TI Verde. Tecnologia para um mundo melhor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
