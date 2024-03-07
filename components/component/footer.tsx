import { Separator } from "@/components/ui/separator";
export function Footer() {
    return (
    <div className="md:w-3/6 mx-auto">
        <p className="text-xs text-gray-300 text-center">utopia.express 2023.</p>
        <div className="flex flex-row w-full text-xs text-center mx-auto pt-2 pb-4 text-gray-400">
            <div className="basis-1/4">
                <p>Clone for Girls</p>
            </div>
            <div className="basis-1/4">
                <p>Clone for Boys</p>
            </div>
            <div className="basis-1/4">
                <p>Customer Support</p>
            </div>
            <div className="basis-1/4">
                <p>GDPR</p>
            </div>
        </div>
    </div>
    )
}