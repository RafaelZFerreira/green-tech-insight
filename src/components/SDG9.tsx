import { Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import odsImage from "@/assets/ods-9.jpg";
import BackToTop from "./BackToTop";

const SDG9 = () => {
  const contributions = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Infraestrutura Resiliente",
      description: "Construção de sistemas tecnológicos mais eficientes e duradouros",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Inovação Sustentável",
      description: "Desenvolvimento de tecnologias que promovem a sustentabilidade",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Industrialização Verde",
      description: "Apoio a processos industriais mais limpos e eficientes",
    },
  ];

  return (
    <section id="ods-9" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            TI Verde e o ODS 9
          </h2>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            O Objetivo de Desenvolvimento Sustentável 9 incentiva a construção de infraestruturas resilientes, 
            a industrialização sustentável e a inovação.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src={odsImage}
                alt="ODS 9 - Indústria, Inovação e Infraestrutura"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              {contributions.map((contribution, index) => (
                <Card key={index} className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {contribution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{contribution.title}</h3>
                      <p className="text-muted-foreground">{contribution.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Compromisso com o Futuro</h3>
            <p className="text-lg">
              Práticas de TI Verde colaboram diretamente com o ODS 9 ao promover tecnologia mais eficiente 
              e sustentável, contribuindo para um futuro mais verde e inovador para todos.
            </p>
          </div>

          <BackToTop />
        </div>
      </div>
    </section>
  );
};

export default SDG9;
