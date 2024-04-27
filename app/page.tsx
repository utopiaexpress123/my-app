"use client"
import { HowItWorks } from "@/components/component/how-it-works";
import { Tamas } from "@/components/component/tamas";
import { MainHeroV3 } from "@/components/component/main-hero-v3";
import { Youtube } from "../components/component/youtube";
import { Lucy } from "@/components/component/lucy";
import { Clone } from "@/components/component/clone";
import { Contact } from "@/components/component/contact";


export default function Home() {
  return (

      <div className="sm:w-full md:w-3/4 mx-auto py-6 px-6">
        <MainHeroV3/>
        <Tamas/>
        <Lucy/>  
        <Clone/>
        <HowItWorks/> 
        <Contact/>    
        <Youtube/>
      </div>
          


    
  );
}
