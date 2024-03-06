import Image from "next/image";
import { MainHero } from "@/components/component/main-hero";
import { BentoCards } from "@/components/component/bento-cards";
import { ServiceSection } from "@/components/component/service-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiService } from "@/components/component/ai-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CarouselSection } from "@/components/component/carousel-section";

export default function Home() {
  return (

    <div>
      <div className="pt-20">
        <MainHero/>
      </div>
        <BentoCards/>
        <CarouselSection/>
    </div>
  );
}
