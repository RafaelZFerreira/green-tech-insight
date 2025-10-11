import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIsGreenIT from "@/components/WhatIsGreenIT";
import DataCenters from "@/components/DataCenters";
import Companies from "@/components/Companies";
import SDG9 from "@/components/SDG9";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhatIsGreenIT />
        <DataCenters />
        <Companies />
        <SDG9 />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
