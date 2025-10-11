import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-12">
      <Button
        onClick={scrollToTop}
        variant="outline"
        className="gap-2 hover-scale"
      >
        <ArrowUp className="h-4 w-4" />
        Voltar ao Topo
      </Button>
    </div>
  );
};

export default BackToTop;
