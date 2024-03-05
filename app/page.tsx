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

export default function Home() {
  return (

    <div className="items-center">
      <div className="pt-20">
        <MainHero/>
      </div>
        
        <BentoCards/>

      <div className="pt-20 mt-20 w-full grid grid-cols-1 md:grid-cols-2 mx-auto md:w-5/6">
        <div className="">
          <h1 className="pb-2 animate-fade-up bg-gradient-to-br from-stone-900 to-stone-500 bg-clip-text text-center  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-7xl md:leading-[5rem]">
          Change how you see yourself
          </h1>
        </div>

        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-8">
            <Card className="h-full rounded-3xl shadow-2xl overflow-hidden bg-transparent">
              <div className="relative aspect-square">
                <Button variant="ghost" className="font-thin p-6 text-xs absolute right-0 text-slate-300">ID 967890</Button>
                <Image
                  alt="Image"
                  className="object-cover"
                  src="/1.png"
                  width= "240"
                  height= "300"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="text-slate-400 absolute bottom-0  flex flex-col items-center justify-center gap-2 p-6">
                  <p>Improve your business appearance.</p>
                </div>
              </div>
            </Card>
            <Card className="h-full rounded-3xl shadow-2xl overflow-hidden bg-transparent">
              <div className="relative aspect-square">
                <Button variant="ghost" className="font-thin p-6 text-xs absolute right-0 text-slate-300">ID 967890</Button>
                <Image
                  alt="Image"
                  className="object-cover"
                  src="/2.png"
                  width= "430"
                  height= "280"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="text-slate-400 absolute bottom-0  flex flex-col items-center justify-center gap-2 p-6">
                  <p>Gain confidence</p>
                </div>
              </div>
            </Card>
            <Card className="h-full rounded-3xl shadow-2xl overflow-hidden bg-transparent">
              <div className="relative aspect-square">
                <Button variant="ghost" className="font-thin p-6 text-xs absolute right-0 text-slate-300">ID 967890</Button>
                <Image
                  alt="Image"
                  className="object-cover"
                  src="/3.png"
                  width= "430"
                  height= "280"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="text-slate-400 absolute bottom-0  flex flex-col items-center justify-center gap-2 p-6">
                  <p>Look at yourself differently than before</p>
                </div>
              </div>
            </Card>
            <Card className="h-full rounded-3xl shadow-2xl overflow-hidden bg-transparent">
              <div className="relative aspect-square">
                <Button variant="ghost" className="font-thin p-6 text-xs absolute right-0 text-slate-300">ID 967890</Button>
                <Image
                  alt="Image"
                  className="object-cover"
                  src="/4.png"
                  width= "430"
                  height= "280"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="text-slate-400 absolute bottom-0  flex flex-col items-center justify-center gap-2 p-6">
                  <p>Boost your Tinder profile</p>
                </div>
              </div>
            </Card>
            <Card className="h-full rounded-3xl shadow-2xl overflow-hidden bg-transparent">
              <div className="relative aspect-square">
                <Button variant="ghost" className="font-thin p-6 text-xs absolute right-0 text-slate-300">ID 967890</Button>
                <Image
                  alt="Image"
                  className="object-cover"
                  src="/5.png"
                  width= "430"
                  height= "280"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="text-slate-400 absolute bottom-0  flex flex-col items-center justify-center gap-2 p-6">
                  <p>And for fun!</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

      </div>

      <div className="w-full">
        <AiService/>
      </div>
    </div>
  );
}
