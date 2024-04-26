import { MainHero } from "@/components/component/main-hero";
import { BentoCardsV2Video } from "@/components/component/bento-cards-v2-video";
import { BentoCardsV4 } from "@/components/component/bento-cards-v4";
import { BentoCardsV3 } from "@/components/component/bento-cards-v3";
import { HowItWorks } from "@/components/component/how-it-works";
import { Coupon } from "@/components/component/coupon";
import { ThreeSteps } from "@/components/component/three-steps";
import { Toolbar } from "@/components/component/lucy";
import { PriceTable } from "@/components/component/price-table";
import { Tamas } from "@/components/component/tamas";
import { MainHeroV3 } from "@/components/component/main-hero-v3";
import { Youtube } from "../components/component/youtube";
import { Products } from "@/components/component/products";
import { Lucy } from "@/components/component/lucy";
import { Clone } from "@/components/component/clone";
import { Contact } from "@/components/component/contact";

export default function Home() {
  return (

    <div className="pb-20">

      <div className="pt-20">
        <MainHeroV3/>
      </div>
      <Tamas/>
      <Lucy/>  
      <Clone/>
      <HowItWorks/> 
      <Contact/>    
<Youtube/>
          
    </div>

    
  );
}
