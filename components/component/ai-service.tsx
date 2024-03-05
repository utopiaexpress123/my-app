/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/N5nmaMzeqlK
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export function AiService() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        alt="Hero"
        className="absolute inset-0 z-[-1] object-cover"
        height="1024"
        src="/circle.png"
        style={{
          aspectRatio: "1024/1024",
          objectFit: "cover",
        }}
        width="1024"
      />
      <div className="relative flex flex-col min-h-screen py-12 text-center justify-center space-y-4 md:py-24 lg:space-y-10 lg:gap-6">
          <h1 className="pb-2 animate-fade-up bg-gradient-to-br from-stone-900 to-stone-500 bg-clip-text text-center  font-extrabold tracking-tighter text-transparent drop-shadow-sm [text-wrap:balance] text-5xl md:text-7xl md:leading-[5rem]">
            Components
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open
            Source.
          </p>
      </div>
    </section>
  )
}



