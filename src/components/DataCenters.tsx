import { Server, Wind, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";
import dataCenterImage from "@/assets/data-center-sustentavel.jpg";
import BackToTop from "./BackToTop";

const DataCenters = () => {
  const strategies = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Energia Renovável",
      description: "Uso de fontes limpas como solar e eólica",
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Refrigeração Eficiente",
      description: "Sistemas otimizados para reduzir consumo energético",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Virtualização",
      description: "Redução de servidores físicos através da virtualização",
    },
  ];

  return (
    <section id="data-centers" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Data Centers Sustentáveis
          </h2>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Data Centers são grandes consumidores de energia, mas a adoção de estratégias sustentáveis 
            ajuda a reduzir significativamente seu impacto ambiental.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <Card key={index} className="p-6 border-border hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {strategy.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{strategy.title}</h3>
                      <p className="text-muted-foreground">{strategy.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={dataCenterImage}
                alt="Data Center Sustentável"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <p className="text-lg text-foreground font-medium">
              Empresas que investem em Data Centers verdes contribuem para a eficiência energética global 
              e demonstram compromisso com a sustentabilidade.
            </p>
          </div>

          <BackToTop />
        </div>
      </div>
    </section>
  );
};

export default DataCenters;
