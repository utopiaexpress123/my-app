import { Separator } from "@/components/ui/separator";

export function ThreeSteps() {
    return (

    <div className="mx-auto md:w-4/5 pl-8 pr-8 relative">
        <Separator orientation="vertical" className="h-20 mb-6 bg-slate-300 mx-auto"/>    
        <div className="relative min-h-64">

            <div className="absolute w-full z-50 flex flex-row text-center">

                <div className="md:w-1/3 pt-2">
                <div className="transition-all mb-4 z-50 border border-slate-300 bg-gradient-to-b from:bg-gray-50 to:bg-gray-100 w-14 h-14 rounded-full mx-auto shadow-slate-900/20 shadow-xl hover:shadow-lg hover:shadow-stone-900/20">
                    <UploadIcon/>
                </div>
                <p className="text-slate-500 text-3xl tracking-tighter text-center">Upload</p>
                <p className="pl-6 pr-6 pt-2 text-center text-sm text-slate-400 dark:text-stone-300">Upload 6-12 photos of yourself. Please do not use someone else's photos without their permission</p>
                </div>   

                <div className="md:w-1/3">
                    <div className="transition-all mb-4 z-50 border border-slate-300 bg-gradient-to-b from:bg-lime-800 to:bg-lime-700 w-16 h-16 rounded-full  mx-auto shadow-fuchsia-900/20 shadow-xl hover:shadow-lg hover:shadow-fuchsia-700/30">
                        <TrainingIcon/>
                    </div>
                    <p className="text-slate-500 text-3xl tracking-tighter text-center">Training</p>
                    <p className="pl-6 pr-6 pt-2 text-center text-sm text-slate-400 dark:text-stone-400">
                    We train a custom model with your photos. This process usually takes 20-30 minutes. Once completed, you will receive your unique Clone ID.
                    </p>
                </div>

                <div className="md:w-1/3 pt-2">
                <div className="transition-all mb-4 z-50 border border-slate-300 bg-gradient-to-b from:bg-gray-50 to:bg-gray-100 w-14 h-14 rounded-full mx-auto shadow-slate-900/20 shadow-xl hover:shadow-lg hover:shadow-stone-900/20">
                    <GenerateIcon/>
                </div>
                <p className="text-slate-500 text-3xl tracking-tighter text-center">Generate</p>
                <p className="pl-6 pr-6 pt-2 text-center text-sm text-slate-400 dark:text-stone-400">With your Clone ID, you can generate any images with your Clone, in any style, and any situation.</p>
                </div>

            </div>

            <div className="z-10 absolute top-9 left-36 right-36">
                <div className="animated-line"></div>
            </div>

            <div className="z-0 absolute top-9 left-36 right-36">
                <Separator orientation="horizontal" className="mx-auto z-0 bg-slate-300"/>
            </div>
          
        </div>  

    </div>
        )
    }

function UploadIcon() {
    return (
<svg className="w-8 h-8 stroke-slate-400 mt-3 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
</svg>
    )
}


function GenerateIcon() {
    return (
<svg className="w-8 h-8 stroke-slate-400 mt-3 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
</svg>
    )
}

function TrainingIcon() {
    return (
<svg className="animate-spin mt-5 ml-5 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<circle className="stroke-slate-300" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
<path className=" fill-fuchsia-400" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
    )
}






    