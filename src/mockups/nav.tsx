import Link from "next/link";
import { ArrowRight, Heart, LayoutGrid, ShieldCheck, Sparkles, UserRoundCog } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

const items = [
  {
    href: "/payment-entry",
    icon: Sparkles,
    title: "Payments",
    description: "Plans and donation",
    tone: "zinc",
  },
  {
    href: "/donation",
    icon: Heart,
    title: "Donation",
    description: "Amount and details",
    tone: "amber",
  },
  {
    href: "/result-states",
    icon: LayoutGrid,
    title: "Payment status",
    description: "Status messages",
    tone: "sky",
  },
  {
    href: "/account-summary",
    icon: ShieldCheck,
    title: "Membership",
    description: "Plan and billing",
    tone: "emerald",
  },
  {
    href: "/support-override",
    icon: UserRoundCog,
    title: "Member access",
    description: "Lookup and updates",
    tone: "rose",
  },
] as const;

const toneClasses = {
  zinc: "border-zinc-200 bg-white",
  amber: "border-amber-200 bg-amber-50/60",
  sky: "border-sky-200 bg-sky-50/70",
  emerald: "border-emerald-200 bg-emerald-50/70",
  rose: "border-rose-200 bg-rose-50/70",
} as const;

const StripeMockupsNavPage = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.82),_transparent_30%),linear-gradient(180deg,#ece7da_0%,#f7f4ed_40%,#efebe2_100%)] px-4 py-8 text-zinc-950 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1320px] rounded-[2.6rem] border border-white/65 bg-white/72 p-5 shadow-[0_55px_140px_-70px_rgba(15,20,18,0.5)] backdrop-blur-xl sm:p-7 lg:p-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 ring-1 ring-amber-200">
              Pages
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                Open a page
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {items.map(({ href, icon: Icon, title, description, tone }) => (
              <Card
                className={cn(
                  "flex h-full flex-col rounded-[2rem] border shadow-[0_20px_60px_-42px_rgba(15,20,18,0.22)]",
                  toneClasses[tone],
                )}
                key={title}
              >
                <CardHeader className="space-y-4 p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-[1rem] bg-zinc-950 text-white">
                      <Icon className="size-5" />
                    </div>
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] text-zinc-600 ring-1 ring-zinc-200">
                      Open
                    </span>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-[1.35rem] font-semibold tracking-[-0.03em] text-zinc-950">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-zinc-600">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto p-7 pt-0">
                  <Link
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[1rem] border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-none transition-colors hover:bg-zinc-50"
                    href={href}
                  >
                    Open
                    <ArrowRight className="size-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export { StripeMockupsNavPage };
