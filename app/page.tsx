import { HowItWorks } from "@/components/component/how-it-works";
import { Tamas } from "@/components/component/tamas";
import { MainHeroV3 } from "@/components/component/main-hero-v3";
import { Youtube } from "../components/component/youtube";
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
