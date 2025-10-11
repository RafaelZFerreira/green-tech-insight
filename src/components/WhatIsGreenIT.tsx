import { Leaf, Recycle, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import BackToTop from "./BackToTop";

const WhatIsGreenIT = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Eficiência Energética",
      description: "Uso inteligente de energia para reduzir o consumo e custos operacionais",
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary" />,
      title: "Reciclagem",
      description: "Reaproveitamento de equipamentos e redução de resíduos eletrônicos",
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustentabilidade",
      description: "Práticas que minimizam o impacto ambiental das operações de TI",
    },
  ];

  return (
    <section id="o-que-e" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            O que é TI Verde?
          </h2>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            TI Verde é o conjunto de práticas e tecnologias que minimizam o impacto ambiental das operações de tecnologia, 
            incluindo o uso eficiente de energia, reciclagem de equipamentos e a redução de resíduos eletrônicos. 
            Adotar TI Verde é fundamental para a preservação do meio ambiente e para o desenvolvimento sustentável.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover-scale transition-all duration-300 border-border hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <BackToTop />
        </div>
      </div>
    </section>
  );
};

export default WhatIsGreenIT;
