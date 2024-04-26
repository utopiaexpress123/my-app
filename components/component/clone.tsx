/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/bgW8MLC9pAQ
 */
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ThreeSteps } from "./three-steps";

export function Clone() {
  return (
    <div className="mx-auto md:w-2/3 shadow-xl border border-slate-300 rounded-3xl">


      <div className="py-8 gap-8 mx-auto">

        <Image
                alt="Image"
                className="float-left pb-8"
                src="/elf.png"
                width= "337"
                height= "600"
                style={{
                  objectFit: "cover",
                }}
        />
      
        <h1 className="mt-8 pt-8 pb-6 animate-fade-up bg-gradient-to-br from-stone-900 to-emerald-900 bg-clip-text text-start  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-5xl md:leading-[3rem]">
          Yeah, it's me... again
        </h1>
        <p className="text-2xl italic font-normal text-slate-600 text-left">
        With this tool you can take any picture of yourself.    
        </p> 
        <p className="text-2xl italic font-normal text-slate-600 text-left">
          Or anyone.    
        </p> 
        <p className="text-2xl italic font-normal text-slate-600 text-left">
        Or anything.   
        </p>
        
        <p className="text-left pt-4 pb-4">
            <Dialog>
                            <DialogTrigger>
                            <Button className="mt-2 h-13 bg-transparent border border-slate-100 hover:border-fuchsia-200 hover:bg-slate-100 shadow-fuchsia-600/10 hover:shadow-fuchsia-400/20 shadow-xl hover:shadow-xl text-stone-500 hover:text-gray-500">
                            <Image
                        alt="Image"
                        className="object-cover rounded-full mr-2 shadow-md"
                        src="/01.png"
                        width= "34"
                        height= "34"
                        style={{
                        objectFit: "cover",
                       }}
                    />
                    <Image
                        alt="Image"
                        className="object-cover rounded-full mr-2 shadow-md"
                        src="/02.png"
                        width= "34"
                        height= "34"
                        style={{
                        objectFit: "cover",
                       }}
                    />
                    <Image
                        alt="Image"
                        className="object-cover rounded-full mr-2 shadow-md"
                        src="/04.png"
                        width= "34"
                        height= "34"
                        style={{
                        objectFit: "cover",
                       }}
                    />
                                <span className="transition-all mr-3 ml-3 text-slate-500 hover:text-slate-400">Utopia Digital Cloner</span>
                                <span className="w-10 h-10 py-1 bg-green-900 text-slate-400 rounded-full text-md">
                                €<span className="text-lg text-slate-300 font-extrabold">21</span>
                                </span>
                            </Button>
                            </DialogTrigger>
                            <DialogContent className="rounded-xl">
                            <DialogHeader>
                                <DialogTitle className="pb-9 text-slate-500">Please select your type</DialogTitle>
                                <DialogDescription>
                                <div className="flex flex-row gap-9 justify-center pb-6">
                                    <div>
                                    <Link href="https://clonegirls.utopia.express/login">
                                        <Image
                                            alt="Image"
                                            className="object-cover rounded-xl shadow-xl shadow-slate-600/50 saturate-0 hover:saturate-100"
                                            src="/select-woman.png"
                                            width= "122"
                                            height= "167"
                                            style={{
                                            objectFit: "cover",
                                            }}
                                        />
                                    </Link>
                                    </div>
                                    <div>
                                    <Link href="https://clone.utopia.express/login">
                                        <Image
                                            alt="Image"
                                            className="object-cover rounded-xl shadow-xl shadow-slate-600/50 saturate-0 hover:saturate-100"
                                            src="/select-man.png"
                                            width= "122"
                                            height= "167"
                                            style={{
                                            objectFit: "cover",
                                            }}
                                        />
                                    </Link>
                                    </div>
                                </div>
                                </DialogDescription>
                            </DialogHeader>
                            </DialogContent>
            </Dialog>
        </p>


      </div>

    </div>
  )
}

