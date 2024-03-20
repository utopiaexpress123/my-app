import { MainHero } from "@/components/component/main-hero";
import { BentoCardsV2Video } from "@/components/component/bento-cards-v2-video";
import { HowItWorks } from "@/components/component/how-it-works";
import { Coupon } from "@/components/component/coupon";
import { ThreeSteps } from "@/components/component/three-steps";
import { Toolbar } from "@/components/component/toolbar";
import { PriceTable } from "@/components/component/price-table";


export default function Home() {
  return (

    <div className="pb-20">
      <div className="pt-20">
        <MainHero/>
      </div>
        <BentoCardsV2Video/>  
        <ThreeSteps/>
        <HowItWorks/> 
        <Coupon/> 
        <PriceTable/>
        <Toolbar/>      
    </div>

    
  );
}
