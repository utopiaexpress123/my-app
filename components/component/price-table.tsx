import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PriceTable() {
    return (

<div className="mx-auto md:w-2/3 pl-8 pr-8 pt-6">

  <div className="flex flex-row h-14">
        <div className="w-1/2 border-r border-slate-300"></div>
        <div className="w-1/2"></div>
  </div>

  <Separator className="my-3 bg-slate-300"/>
  <div className="flex h-6 items-center space-x-4 md:space-x-6 text-sm">
    <div>1 training process</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div className="w-32">16 portrait photos</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div className="w-44">50 Freely generated image</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div className="">
    21€
      <Link href="https://checkout.stripe.com/c/pay/cs_live_a1pHwMbdaiAKqG9XKVxABbiT2VhDSPBusweQW6ZTQZsMpSTy07ynhrzkhj#fidkdWxOYHwnPyd1blppbHNgWjA0SGhjd2pDSTFOaU19fXBXZzR1MVJfTkZVRm5faTA8Y310fTJhR3xAfWx8MnRHamN8TkJqamtfbWhMaHByb0dGUXFyX3FDYmtsPWNIbm1KUGxSc1NnYEp1NTVtX3EwbTBuZCd4JSUl">
        <Button variant="outline" className="ml-2 h-8 shadow-sm">Buy now</Button>
      </Link>
    </div>
  </div>

  <Separator className="my-3 bg-slate-300"/>
  <div className="flex h-6 items-center space-x-4 md:space-x-6 text-sm">
    <div>3 training process</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div className="w-32">3x16 portrait photos</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div className="w-38">3x50 Freely generated image</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div>
    59€
      <Link href="https://checkout.stripe.com/c/pay/cs_live_a1pHwMbdaiAKqG9XKVxABbiT2VhDSPBusweQW6ZTQZsMpSTy07ynhrzkhj#fidkdWxOYHwnPyd1blppbHNgWjA0SGhjd2pDSTFOaU19fXBXZzR1MVJfTkZVRm5faTA8Y310fTJhR3xAfWx8MnRHamN8TkJqamtfbWhMaHByb0dGUXFyX3FDYmtsPWNIbm1KUGxSc1NnYEp1NTVtX3EwbTBuZCd4JSUl">
        <Button variant="outline" className="ml-2 h-8 shadow-sm">Buy now</Button>
      </Link>
    </div>
  </div>

  <Separator className="my-3 bg-slate-300"/>
  <div className="flex h-6 items-center space-x-4 md:space-x-6 text-sm">
    <div>5 training process</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div className="w-32">5x16 portrait photos</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div className="w-38">5x50 Freely generated image</div>
    <Separator orientation="vertical" className="bg-slate-300"/>
    <div className="">
    95€
      <Link href="https://checkout.stripe.com/c/pay/cs_live_a1pHwMbdaiAKqG9XKVxABbiT2VhDSPBusweQW6ZTQZsMpSTy07ynhrzkhj#fidkdWxOYHwnPyd1blppbHNgWjA0SGhjd2pDSTFOaU19fXBXZzR1MVJfTkZVRm5faTA8Y310fTJhR3xAfWx8MnRHamN8TkJqamtfbWhMaHByb0dGUXFyX3FDYmtsPWNIbm1KUGxSc1NnYEp1NTVtX3EwbTBuZCd4JSUl">
        <Button variant="outline" className="ml-2 h-8 shadow-sm">Buy now</Button>
      </Link>
    </div>
  </div>
  <Separator className="my-3 bg-slate-300"/>



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