import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "mr-0 rounded-full border-transparent bg-fuchsia-400	hover:bg-fuchsia-300 text-slate-50",
        secondary:
          "pl-2 pr-2 pt-1 pb-1 rounded-full border-transparent bg-fuchsia-400 text-primary-foreground hover:bg-sky-300",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "rounded-full border-slate-300 text-slate-700 bg-slate-200 border-1",
        male:
          "pl-2 pr-2 pt-1 pb-1 rounded-full border-transparent bg-sky-400 text-slate-100 hover:bg-sky-500",
        female:
          "pl-2 pr-2 pt-1 pb-1 rounded-full border-transparent bg-fuchsia-400 text-slate-100 hover:bg-fuchsia-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
