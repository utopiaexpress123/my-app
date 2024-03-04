import Image from "next/image";
import { MainHero } from "@/components/component/main-hero";
import { BentoCards } from "@/components/component/bento-cards";
import { ServiceSection } from "@/components/component/service-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Home() {
  return (
    <div className="flex flex-col items-center pt-0">
      <MainHero/>
      <BentoCards/>
      <ServiceSection/>
    </div>
  );
}
