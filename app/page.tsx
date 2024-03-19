import { MainHero } from "@/components/component/main-hero";
import { BentoCardsV2Video } from "@/components/component/bento-cards-v2-video";
import { HowItWorks } from "@/components/component/how-it-works";


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
