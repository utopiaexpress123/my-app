/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7VFkLwBdWbx
 */
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function HowItWorks() {
  return (
    <div className="mx-auto md:w-3/4 mt-20">

      <div className="container grid items-center gap-8 px-4 md:px-6">

        <div className="grid  md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="mt-6 sm:mb-8 flex flex-col items-center gap-4 transition-all bg-pink-400 hover:bg-pink-500 shadow-2xl rounded-3xl">
            <div className="transition-colors	flex items-center justify-center rounded-full w-36 h-36 ">
              <Image
                alt="Image"
                className="object-cover pb-8"
                src="/mad.png"
                width= "337"
                height= "600"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <h1 className="pt-4 pb-6 pl-2 pr-2 text-slate-100 text-xl tracking-tight text-center">Make ads with your own super photogenic face?</h1>
          </div>
          <div className="mt-6 sm:mb-8 flex flex-col items-center gap-4 transition-all bg-red-500 hover:bg-red-600 rounded-3xl">
            <div className="transition-colors flex items-center justify-center  w-36 h-36 ">
              <Image
                alt="Image"
                className="object-cover pb-8"
                src="/kabat.png"
                width= "337"
                height= "600"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <h1 className="pt-4 pb-6 pl-2 pr-2 text-slate-100 text-xl tracking-tight text-center">Try on a real coat virtually at home?</h1>
          </div>
          <div className="mt-6 sm:mb-8 flex flex-col items-center gap-4 bg-stone-800 hover:bg-stone-900 rounded-3xl">
            <div className="transition-colors flex items-center justify-center  w-36 h-36">
              <Image
                alt="Image"
                className="object-cover pb-8"
                src="/vv.png"
                width= "337"
                height= "600"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <h1 className="pt-4 pb-6 pl-2 pr-2 text-slate-100 text-xl tracking-tight text-center">...or create surprise photos for your husband?</h1>
          </div>
        </div>

        <div className="grid  md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="transition-all mt-6 sm:mb-8 flex flex-col items-center gap-4 bg-rose-500 hover:bg-gray-400 rounded-3xl">
            <div className="transition-colors	flex items-center justify-center  w-36 h-36">
              <Image
                alt="Image"
                className="object-cover pb-8"
                src="/shoe.png"
                width= "437"
                height= "600"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <h1 className="pt-4 pb-6 pl-2 pr-2 text-slate-100 text-xl tracking-tight text-center">Create product photos in any enviroment</h1>
          </div>

          <div className="transition-all mt-6 sm:mb-8 flex flex-col items-center gap-4 bg-amber-500 hover:bg-gray-400 rounded-3xl">
            <div className="transition-colors	flex items-center justify-center w-42 h-36">
              <Image
                alt="Image"
                className="object-cover"
                src="/house.png"
                width= "337"
                height= "600"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <h1 className="pt-4 pb-6 pl-2 pr-2 text-slate-100 text-xl tracking-tight text-center">Interior Design based on a sketch or photo</h1>
          </div>

          <div className="transition-all mt-6 sm:mb-8 flex flex-col items-center gap-4 bg-transparent  rounded-3xl">
            <div className="transition-colors	flex items-center justify-center w-42 h-36">
              <Idea2Icon/>
            </div>
            <h1 className="pt-4 pb-6 pl-2 pr-2 text-slate-300 text-xl tracking-tight text-center">I'm just a developer, you probably have better ideas</h1>
          </div>

        </div>



      </div>

    </div>
  )
}


function IdeaIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 text-slate-300 mt-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
  )
}



function Idea2Icon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-slate-300 mt-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


  )
}


function CommandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path className="w-8 h-8 text-gray-500 dark:text-gray-400" d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  )
}


function MergeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}
