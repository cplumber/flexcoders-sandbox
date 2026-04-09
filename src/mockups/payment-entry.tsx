import Link from "next/link";
import { ArrowRight, Check, Heart, Lock, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/cn";

type StatusPillTone = "green" | "blue" | "warm";

type PlanCardProps = {
  badge: string;
  badgeTone: StatusPillTone;
  title: string;
  subtitle: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  theme: "ink" | "sky" | "sand";
};

const pillClasses: Record<StatusPillTone, string> = {
  green: "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200",
  blue: "bg-sky-100 text-sky-900 ring-1 ring-sky-200",
  warm: "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
};

const planThemes: Record<
  PlanCardProps["theme"],
  {
    shell: string;
    icon: string;
    button: string;
  }
> = {
  ink: {
    shell:
      "border-zinc-200 bg-linear-to-b from-white via-white to-zinc-50 shadow-[0_28px_90px_-50px_rgba(14,20,17,0.45)]",
    icon: "bg-zinc-950 text-white",
    button: "bg-zinc-950 text-white hover:bg-zinc-800",
  },
  sky: {
    shell:
      "border-sky-200 bg-linear-to-b from-sky-50 via-white to-sky-100/70 shadow-[0_28px_90px_-50px_rgba(29,78,216,0.32)]",
    icon: "bg-sky-900 text-white",
    button: "bg-sky-900 text-white hover:bg-sky-800",
  },
  sand: {
    shell:
      "border-amber-200 bg-linear-to-b from-amber-50 via-white to-orange-50 shadow-[0_28px_90px_-50px_rgba(217,119,6,0.28)]",
    icon: "bg-amber-500 text-amber-950",
    button: "bg-amber-500 text-amber-950 hover:bg-amber-400",
  },
};

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li className="flex items-start gap-3 text-sm leading-6 text-zinc-700" key={item}>
        <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <Check className="size-3.5" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PlanCard = ({
  badge,
  badgeTone,
  title,
  subtitle,
  price,
  cadence,
  description,
  features,
  cta,
  theme,
}: PlanCardProps) => {
  const themeStyles = planThemes[theme];

  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[2rem] border",
        themeStyles.shell,
      )}
    >
      <CardHeader className="space-y-6 p-8">
        <div className="flex items-start justify-between gap-5">
          <div className="space-y-4">
            <div
              className={cn(
                "flex size-13 items-center justify-center rounded-[1.15rem]",
                themeStyles.icon,
              )}
            >
              {theme === "ink" && <Lock className="size-5" />}
              {theme === "sky" && <ShieldCheck className="size-5" />}
              {theme === "sand" && <Heart className="size-5" />}
            </div>
            <div className="space-y-1.5">
              <CardTitle className="text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-zinc-950 sm:text-[1.65rem] lg:text-[1.7rem] lg:whitespace-nowrap">
                {title}
              </CardTitle>
              <CardDescription className="text-sm leading-6 text-zinc-600">
                {subtitle}
              </CardDescription>
            </div>
          </div>
          <span
            className={cn(
              "inline-flex whitespace-nowrap rounded-full px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em]",
              pillClasses[badgeTone],
            )}
          >
            {badge}
          </span>
        </div>

        <div className="flex items-end gap-2">
          <div className="text-5xl font-semibold tracking-[-0.06em] text-zinc-950">
            {price}
          </div>
          <div className="pb-1.5 text-sm font-medium whitespace-nowrap text-zinc-500">{cadence}</div>
        </div>

        <p className="max-w-md text-sm leading-7 text-zinc-700">{description}</p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-7 p-8 pt-0">
        <FeatureList items={features} />

        <div className="mt-auto pt-2">
          <Button
            className={cn(
              "h-13 w-full rounded-[1.15rem] text-sm font-semibold shadow-none",
              themeStyles.button,
            )}
            size="lg"
          >
            {cta}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const DonationTeaser = () => (
  <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-amber-200 bg-linear-to-b from-amber-50 via-white to-orange-50 shadow-[0_28px_90px_-50px_rgba(217,119,6,0.28)]">
    <CardHeader className="space-y-6 p-8">
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
              Give a one-time contribution.
            </CardDescription>
          </div>
        </div>
        <span className="inline-flex whitespace-nowrap rounded-full bg-amber-100 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] text-amber-900 ring-1 ring-amber-200">
          Donate
        </span>
      </div>
    </CardHeader>

    <CardContent className="mt-auto flex flex-1 flex-col space-y-5 p-8 pt-0">
      <div className="grid gap-3 rounded-[1.35rem] border border-zinc-200 bg-white p-4 text-sm text-zinc-700 sm:grid-cols-2">
        <div className="space-y-2">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
            Amount
          </div>
          <div className="rounded-[0.95rem] border border-zinc-200 bg-white px-4 py-3 leading-6 text-zinc-500">
            Choose preset or custom
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
            Details
          </div>
          <div className="rounded-[0.95rem] border border-zinc-200 bg-white px-4 py-3 leading-6 text-zinc-500">
            Email and name
          </div>
        </div>
      </div>
      <Link
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-[1.15rem] bg-amber-500 px-4 py-3 text-sm font-semibold text-amber-950 shadow-none transition-colors hover:bg-amber-400"
        href="/donation"
      >
        Open donation
        <ArrowRight className="size-4" />
      </Link>
    </CardContent>
  </Card>
);

const PaymentEntryMockupPage = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.82),_transparent_30%),linear-gradient(180deg,#ece7da_0%,#f7f4ed_40%,#efebe2_100%)] px-4 py-8 text-zinc-950 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1480px] rounded-[2.6rem] border border-white/65 bg-white/72 p-5 shadow-[0_55px_140px_-70px_rgba(15,20,18,0.5)] backdrop-blur-xl sm:p-7 lg:p-10">
        <div className="space-y-8">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 ring-1 ring-amber-200">
                Secure checkout
              </div>

              <div className="space-y-4">
                <div className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                  FlexCoders Payments
                </div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl lg:text-6xl">
                  Choose a payment option.
                </h1>
                <p className="max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
                  Select a plan or make a donation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_1.05fr_1.15fr]">
            <PlanCard
              badge="Login required"
              badgeTone="warm"
              title="One-time Premium"
              subtitle="For a single purchase"
              price="$49"
              cadence="one-time"
              description="Unlock premium access with a one-time payment."
              features={[
                "One payment",
                "Premium access included",
                "Secure checkout",
              ]}
              cta="Continue"
              theme="ink"
            />

            <PlanCard
              badge="Popular"
              badgeTone="blue"
              title="Monthly Subscription"
              subtitle="For ongoing access"
              price="$15"
              cadence="/ month"
              description="Stay subscribed for continued access."
              features={[
                "Automatic renewal",
                "Cancel anytime",
                "Premium while active",
              ]}
              cta="Subscribe"
              theme="sky"
            />

            <DonationTeaser />
          </div>
        </div>
      </div>
    </main>
  );
};

export { PaymentEntryMockupPage };
