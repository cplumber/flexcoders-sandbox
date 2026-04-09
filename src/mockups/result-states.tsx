import { BadgeCheck, CircleAlert, Clock3, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

const ResultStatesMockupPage = () => {
  const cards = [
    {
      tone: "emerald",
      icon: BadgeCheck,
      title: "Payment complete",
      body: "Thanks for your payment. You can continue to your account now.",
      badge: "Success",
      detailLabel: "Plan",
      detailValue: "Monthly subscription",
      primary: "Go to account",
      secondary: "Continue browsing",
    },
    {
      tone: "sky",
      icon: Clock3,
      title: "Payment is processing",
      body: "This can take a moment while the payment is being confirmed.",
      badge: "Pending",
      detailLabel: "Check again",
      detailValue: "In a few moments",
      primary: "Check status",
      secondary: "Back to payment",
    },
    {
      tone: "amber",
      icon: RefreshCw,
      title: "Payment canceled",
      body: "No charge was made. You can try again whenever you are ready.",
      badge: "Canceled",
      detailLabel: "Saved choice",
      detailValue: "$25 donation",
      primary: "Try again",
      secondary: "Choose another option",
    },
    {
      tone: "rose",
      icon: CircleAlert,
      title: "Payment could not be completed",
      body: "The payment did not go through. You can retry or choose a different option.",
      badge: "Error",
      detailLabel: "Need help",
      detailValue: "Support is available",
      primary: "Try again",
      secondary: "Contact support",
    },
  ] as const;

  const toneClasses = {
    emerald: "border-emerald-200 bg-emerald-50/70",
    sky: "border-sky-200 bg-sky-50/70",
    amber: "border-amber-200 bg-amber-50/70",
    rose: "border-rose-200 bg-rose-50/70",
  } as const;

  const badgeClasses = {
    emerald: "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200",
    sky: "bg-sky-100 text-sky-900 ring-1 ring-sky-200",
    amber: "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
    rose: "bg-rose-100 text-rose-900 ring-1 ring-rose-200",
  } as const;

  const buttonClasses = {
    emerald: "bg-emerald-600 text-white hover:bg-emerald-500",
    sky: "bg-sky-900 text-white hover:bg-sky-800",
    amber: "bg-amber-500 text-amber-950 hover:bg-amber-400",
    rose: "bg-rose-600 text-white hover:bg-rose-500",
  } as const;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.82),_transparent_30%),linear-gradient(180deg,#ece7da_0%,#f7f4ed_40%,#efebe2_100%)] px-4 py-8 text-zinc-950 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1320px] rounded-[2.6rem] border border-white/65 bg-white/72 p-5 shadow-[0_55px_140px_-70px_rgba(15,20,18,0.5)] backdrop-blur-xl sm:p-7 lg:p-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 ring-1 ring-amber-200">
              Payment update
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                Payment status
              </div>
              <p className="max-w-3xl text-base leading-7 text-zinc-600">
                Clear next steps after checkout.
              </p>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {cards.map(({ tone, icon: Icon, title, body, badge, detailLabel, detailValue, primary, secondary }) => (
              <Card className={cn("flex h-full flex-col overflow-hidden rounded-[2rem] border", toneClasses[tone])} key={title}>
                <CardHeader className="space-y-5 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-4">
                      <div className={cn("flex size-13 items-center justify-center rounded-[1.15rem]", {
                        emerald: "bg-emerald-500 text-emerald-950",
                        sky: "bg-sky-900 text-white",
                        amber: "bg-amber-500 text-amber-950",
                        rose: "bg-rose-500 text-white",
                      }[tone])}>
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-1.5">
                        <CardTitle className="text-[1.6rem] font-semibold tracking-[-0.03em] text-zinc-950">
                          {title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-6 text-zinc-600">
                          {body}
                        </CardDescription>
                      </div>
                    </div>
                    <span className={cn("inline-flex whitespace-nowrap rounded-full px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em]", badgeClasses[tone])}>
                      {badge}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto flex flex-1 flex-col space-y-5 p-8 pt-0">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] border border-zinc-200 bg-white px-4 py-4">
                      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                        {detailLabel}
                      </div>
                      <div className="mt-2 text-sm font-medium text-zinc-900">{detailValue}</div>
                    </div>
                    <div className="rounded-[1.2rem] border border-zinc-200 bg-white px-4 py-4 text-sm leading-6 text-zinc-700">
                      {title === "Payment complete" && "Your access is ready."}
                      {title === "Payment is processing" && "Please check again shortly."}
                      {title === "Payment canceled" && "You can return to the payment options and try again."}
                      {title === "Payment could not be completed" && "Please try again or choose a different option."}
                    </div>
                  </div>
                  <div className="mt-auto flex gap-3">
                    <Button className={cn("h-13 flex-1 rounded-[1.15rem] text-sm font-semibold shadow-none", buttonClasses[tone])}>
                      {primary}
                    </Button>
                    <Button className="h-13 flex-1 rounded-[1.15rem] border border-zinc-200 bg-white text-sm font-semibold text-zinc-900 shadow-none hover:bg-zinc-50" variant="outline">
                      {secondary}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export { ResultStatesMockupPage };
