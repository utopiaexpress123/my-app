import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function ThreeSteps() {
    return (

    <div className="mx-auto pl-8 pr-8 relative"> 
        <Separator orientation="vertical" className="h-8 mb-6 bg-lime-500 mx-auto"/>    
        <div className="relative min-h-32">

            <div className="absolute w-full z-50 flex flex-row text-center">

                <div className="md:w-1/3 pt-2">
                <div className="transition-all mb-4 z-100 border border-lime-500 bg-gray-50 w-14 h-14 rounded-full mx-auto shadow-slate-900/20 shadow-xl hover:shadow-lg hover:shadow-stone-900/20">
                    <UploadIcon/>
                </div>
                <p className="text-slate-200 text-xl tracking-wide text-center">Refine</p>
                </div>   

                <div className="md:w-1/3">
                    <div className="transition-all mb-4 z-50 border border-lime-500 bg-gray-50 w-16 h-16 rounded-full  mx-auto shadow-lime-800/30 shadow-lg hover:shadow-lg hover:shadow-lime-500/60">
                        <TrainingIcon/>
                    </div>
                    <p className="text-slate-200 text-xl tracking-wide text-center">Research</p>
                </div>

                <div className="md:w-1/3 pt-2">
                <div className="mb-4 border border-lime-500 bg-gray-50 w-14 h-14 rounded-full mx-auto shadow-slate-900/20 shadow-xl hover:shadow-lg hover:shadow-stone-900/20">
                    <GenerateIcon/>
                </div>
                <p className="text-slate-200 text-xl tracking-wide text-center">Interpret</p>
                </div>

            </div>

            <div className="z-10 absolute top-9 left-36 right-36">
                <div className="animated-line"></div>
            </div>

            <div className="z-0 absolute top-9 left-36 right-36">
                <Separator orientation="horizontal" className="mx-auto z-0 bg-lime-500"/>
            </div>
          
        </div>
        <Separator orientation="vertical" className="h-16 mb-6 bg-lime-500 mx-auto"/>
           
    </div>
        )
    }

function UploadIcon() {
    return (
<svg className="w-6 h-6 stroke-slate-500 mt-4 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

    )
}


function GenerateIcon() {
    return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 stroke-slate-500 mt-4 ml-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>


    )
}

function TrainingIcon() {
    return (
<svg className="animate-spin mt-5 ml-5 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<circle className="stroke-slate-500" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
<path className=" fill-lime-500" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
    )
}






    