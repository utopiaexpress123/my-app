import { Separator } from "@/components/ui/separator";

export function PriceTable() {
    return (

<div>
<Separator className="my-3  bg-transparent"/>
<div className="pl-2 pr-2 flex h-5 space-x-3 text-sm text-slate-400">
  <div className="w-full"><span className="font-bold w-24">1 Clone ID</span> + 1x12 photos</div>
  <div className="text-end w-14 text-fuchsia-400 relative">
    <span className="pr-5">21</span>
    <span className="absolute top-1  right-0"><EurIcon/></span>
  </div>
</div>

<Separator className="my-3 bg-slate-200" />
<div className="pl-2 pr-2 flex h-5 space-x-3 text-sm text-slate-400">
<div className="w-full"><span className="font-bold w-24">3 Clone ID</span> + 3x12 photos</div>
  <div className="w-58"></div>
  <div className="text-end w-14 text-fuchsia-400 relative">
    <span className="pr-5">59</span>
    <span className="absolute top-1  right-0"><EurIcon/></span>
  </div>
</div>
<Separator className="my-3 bg-slate-200" />
<div className="pl-2 pr-2 flex h-5 space-x-3 text-sm text-slate-400">
<div className="w-full"><span className="font-bold w-24">5 Clone ID</span> + 5x12 photos</div>
  <div className="w-58"></div>
  <div className="text-end w-14 text-fuchsia-400 relative">
    <span className="pr-5">95</span>
    <span className="absolute top-1  right-0"><EurIcon/></span>
  </div>
</div>
<Separator className="my-3 bg-slate-200" />
<p className=""></p>
</div>
  )
}

function EurIcon() {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    )
}