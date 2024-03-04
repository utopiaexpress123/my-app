import Image from "next/image";
import { MainHero } from "@/components/component/main-hero";
import { BentoCards } from "@/components/component/bento-cards";
import { ServiceSection } from "@/components/component/service-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavBar } from "@/components/component/nav-bar";


export default function Home() {
  return (
    <main>
      <NavBar/>
      <MainHero/>
      <BentoCards/>
      <ServiceSection/>
    </main>
  );
}
