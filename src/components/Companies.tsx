import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import BackToTop from "./BackToTop";

const Companies = () => {
  const companies = [
    {
      name: "Google",
      practice: "Utiliza energia 100% renovável em seus data centers",
      color: "from-blue-500 to-green-500",
    },
    {
      name: "Microsoft",
      practice: "Investe em eficiência energética e neutralização de carbono",
      color: "from-blue-600 to-cyan-500",
    },
    {
      name: "IBM",
      practice: "Desenvolve soluções para reduzir o impacto ambiental da TI",
      color: "from-blue-700 to-blue-500",
    },
    {
      name: "Apple",
      practice: "Comprometida com energia limpa e reciclagem de equipamentos",
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <section id="empresas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Empresas que Aplicam TI Verde
          </h2>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Conheça algumas empresas que se destacam na adoção de práticas sustentáveis em tecnologia
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {companies.map((company, index) => (
              <Card
                key={index}
                className="p-6 hover-scale transition-all duration-300 border-border hover:shadow-lg overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-5`} />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">{company.name}</h3>
                      <p className="text-muted-foreground">{company.practice}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <p className="text-lg text-foreground font-medium">
              Essas empresas líderes demonstram que é possível unir inovação tecnológica 
              com responsabilidade ambiental, inspirando outras organizações a seguir o mesmo caminho.
            </p>
          </div>

          <BackToTop />
        </div>
      </div>
    </section>
  );
};

export default Companies;
