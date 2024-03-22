import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

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
                    <Dialog>
                        <DialogTrigger>
                          <Button variant="outline" className="ml-2 h-8 shadow-sm">Buy now</Button>
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
                  <Dialog>
                        <DialogTrigger>
                          <Button variant="outline" className="ml-2 h-8 shadow-sm">Buy now</Button>
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
                  <Dialog>
                        <DialogTrigger>
                          <Button variant="outline" className="ml-2 h-8 shadow-sm">Buy now</Button>
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