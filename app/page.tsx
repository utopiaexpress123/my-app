import Image from "next/image";
import { MainHero } from "@/components/component/main-hero";
import { BentoCardsV4 } from "@/components/component/bento-cards-v4";
import { BentoCardsV2Video } from "@/components/component/bento-cards-v2-video";
import { BentoCardsV2 } from "@/components/component/bento-cards-v2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiService } from "@/components/component/ai-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CarouselSection } from "@/components/component/carousel-section";
import { Toolbar } from "@/components/component/toolbar";
import { CustomPriceTable } from "@/components/component/custom-price-table";
import { HowItWorks } from "@/components/component/how-it-works";
import { ServiceSection } from "@/components/component/service-section";
import TestBot from "@/components/component/botpress";

export default function Home() {
  return (

    <div className="pb-20">
      <div className="pt-20">
        <MainHero/>
      </div>
        <BentoCardsV2Video/>  
        <HowItWorks/>        
    </div>

    
  );
}
