import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

const DonationCard = () => {
  const amountOptions = ["$5", "$10", "$25", "$50"];
  const modeOptions = ["Preset amount", "Custom amount"];

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-amber-200 bg-linear-to-b from-amber-50 via-white to-orange-50 shadow-[0_28px_90px_-50px_rgba(217,119,6,0.28)]">
      <CardHeader className="space-y-4 p-8">
        <div className="flex items-start justify-between gap-5">
          <div className="space-y-4">
            <div className="flex size-13 items-center justify-center rounded-[1.15rem] bg-amber-500 text-amber-950">
              <Heart className="size-5" />
            </div>
            <div className="space-y-1.5">
              <CardTitle className="text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-[1.65rem] lg:text-[1.7rem] lg:whitespace-nowrap">
                Donation
              </CardTitle>
              <CardDescription className="text-sm leading-6 text-zinc-600">
                Support the project with a one-time contribution.
              </CardDescription>
            </div>
          </div>
          <span className="inline-flex whitespace-nowrap rounded-full bg-amber-100 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] text-amber-900 ring-1 ring-amber-200">
            Guest
          </span>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 rounded-[1.2rem] border border-amber-200 bg-white/80 p-2">
            {modeOptions.map((mode) => (
              <button
                className={cn(
                  "rounded-[0.95rem] px-4 py-3 text-sm font-semibold transition-colors",
                  mode === "Preset amount"
                    ? "bg-zinc-950 text-white"
                    : "bg-transparent text-zinc-700 hover:bg-zinc-100",
                )}
                key={mode}
                type="button"
              >
                {mode}
              </button>
            ))}
          </div>
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
            Choose amount
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {amountOptions.map((amount) => (
              <button
                className={cn(
                  "rounded-[1rem] border px-4 py-3 text-sm font-semibold transition-colors",
                  amount === "$25"
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300",
                )}
                key={amount}
                type="button"
              >
                {amount}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 rounded-[1.35rem] border border-zinc-200 bg-white/80 p-4 text-sm text-zinc-700 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Email address
            </div>
            <div className="rounded-[0.95rem] border border-zinc-200 bg-white px-4 py-3 leading-6 text-zinc-500">
              name@example.com
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Name (optional)
            </div>
            <div className="rounded-[0.95rem] border border-zinc-200 bg-white px-4 py-3 leading-6 text-zinc-500">
              Alex
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-7 p-8 pt-0">
        <div className="grid gap-3 rounded-[1.35rem] border border-zinc-200 bg-white p-4 text-sm text-zinc-700 sm:grid-cols-3">
          <div className="space-y-2">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Custom amount
            </div>
            <div className="rounded-[1rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-950">
              $25.00
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Currency
            </div>
            <div className="rounded-[0.95rem] border border-zinc-200 bg-white px-4 py-3 leading-6 text-zinc-500">
              USD
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              What happens next
            </div>
            <div className="rounded-[0.95rem] border border-zinc-200 bg-white px-4 py-3 leading-6 text-zinc-500">
              You will continue to secure checkout.
            </div>
          </div>
        </div>

        <div className="mt-auto pt-2">
          <Button className="h-13 w-full rounded-[1.15rem] bg-amber-500 text-sm font-semibold text-amber-950 shadow-none hover:bg-amber-400">
            Continue to checkout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { DonationCard };
