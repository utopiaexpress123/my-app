/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/GTiknl5t6iH
 */


import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function CustomPriceTable() {
  return (
    <div className="w-full mx-auto p-8 overflow-x-auto">
      <div className="transparent">
        <div className="grid grid-rows-1 sm:grid-rows-3 gap-3">

          <div className="shadow-xl hover:shadow-lg flex flex-col border-b sm:border-b-0 last:border-b-0 last:sm:border-r p-4 rounded-xl bg-gray-100">
            <div className="pt-3 text-lg font-semibold">1 Credit</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 leading-none">1x16 portrait + 1x50 freely generated image</div>
            <div className="text-stone-700 tracking-tighter pt-2 font-extrabold text-2xl md:text-3xl">
              21<span className="text-lg">€</span>
              <sup className="text-base"></sup>
            </div>
            <Link href="https://buy.stripe.com/dR6g2V2sVctm0pi00c" className="pt-2">
              <Button>Buy 50 Credits</Button>
            </Link>
          </div>

          <div className="shadow-xl hover:shadow-lg flex flex-col border-b sm:border-b-0 last:border-b-0 last:sm:border-r p-4 rounded-xl bg-lime-100 dark:bg-gray-800">
            <div className="pt-3 text-lg font-semibold">3 Credit</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 leading-none">3x16 portrait + 3x50 freely generated image</div>
            <div className="text-stone-700 tracking-tighter pt-2 font-extrabold text-2xl md:text-3xl">
              59<span className="text-lg">€</span>
              <sup className="text-base"></sup>
            </div>
            <Link href="https://buy.stripe.com/14kg2Vc3vdxq0pi5kx" className="pt-2">
              <Button>Buy 100 Credits</Button>
            </Link>
          </div>

          <div className="shadow-xl hover:shadow-lg flex flex-col border-b sm:border-b-0 last:border-b-0 last:sm:border-r p-4 rounded-xl bg-gray-50 dark:bg-gray-900">
            <div className="pt-3 text-lg font-semibold">5 Credit</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 leading-none">5x16 portrait + 5x50 freely generated image</div>
            <div className="text-stone-700 tracking-tighter pt-2 font-extrabold text-2xl md:text-3xl">
              95<span className="text-lg">€</span>
              <sup className="text-base"></sup>
            </div>
            <Link href="https://buy.stripe.com/dR603XebD8d6b3WeV8" className="pt-2">
              <Button>Buy 200 Credits</Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
