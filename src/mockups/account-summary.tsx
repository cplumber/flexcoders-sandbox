import { CreditCard, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InputShell = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-2">
    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
      {label}
    </div>
    <div className="rounded-[0.95rem] border border-zinc-200 bg-white px-4 py-3 text-sm leading-6 text-zinc-500">
      {value}
    </div>
  </div>
);

const AccountSummaryMockupPage = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.82),_transparent_30%),linear-gradient(180deg,#ece7da_0%,#f7f4ed_40%,#efebe2_100%)] px-4 py-8 text-zinc-950 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1200px] rounded-[2.6rem] border border-white/65 bg-white/72 p-5 shadow-[0_55px_140px_-70px_rgba(15,20,18,0.5)] backdrop-blur-xl sm:p-7 lg:p-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 ring-1 ring-emerald-200">
              Billing
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl">
              Your membership
            </h1>
            <p className="max-w-3xl text-base leading-7 text-zinc-600">
              View your plan and manage billing.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-emerald-200 bg-linear-to-b from-emerald-50 via-white to-white shadow-[0_28px_90px_-50px_rgba(16,185,129,0.28)]">
              <CardHeader className="space-y-4 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <div className="flex size-13 items-center justify-center rounded-[1.15rem] bg-emerald-500 text-emerald-950">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div className="space-y-1.5">
                      <CardTitle className="text-[1.6rem] font-semibold tracking-[-0.03em] text-zinc-950">
                        Premium access
                      </CardTitle>
                      <CardDescription className="text-sm leading-6 text-zinc-600">
                        Current access and expiry information.
                      </CardDescription>
                    </div>
                  </div>
                  <span className="inline-flex whitespace-nowrap rounded-full bg-emerald-100 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] text-emerald-900 ring-1 ring-emerald-200">
                    Active
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 p-8 pt-0">
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Plan" value="Monthly subscription" />
                  <InputShell label="Valid until" value="June 14, 2026" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Status" value="Active" />
                  <InputShell label="Access type" value="Premium while active" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Manual update" value="Not active" />
                  <InputShell label="Update until" value="-" />
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                  <Button className="h-13 flex-1 rounded-[1.15rem] bg-emerald-600 text-sm font-semibold text-white shadow-none hover:bg-emerald-500">
                    Open billing portal
                  </Button>
                  <Button className="h-13 flex-1 rounded-[1.15rem] border border-zinc-200 bg-white text-sm font-semibold text-zinc-900 shadow-none hover:bg-zinc-50">
                    View details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-sky-200 bg-linear-to-b from-sky-50 via-white to-white shadow-[0_28px_90px_-50px_rgba(59,130,246,0.25)]">
              <CardHeader className="space-y-4 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <div className="flex size-13 items-center justify-center rounded-[1.15rem] bg-sky-900 text-white">
                      <CreditCard className="size-5" />
                    </div>
                    <div className="space-y-1.5">
                      <CardTitle className="text-[1.6rem] font-semibold tracking-[-0.03em] text-zinc-950">
                        Manage billing
                      </CardTitle>
                      <CardDescription className="text-sm leading-6 text-zinc-600">
                        Update your payment method, invoices, and subscription.
                      </CardDescription>
                    </div>
                  </div>
                  <span className="inline-flex whitespace-nowrap rounded-full bg-sky-100 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] text-sky-900 ring-1 ring-sky-200">
                    Billing
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 p-8 pt-0">
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Subscription status" value="Active" />
                  <InputShell label="Next payment" value="May 14, 2026" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Auto-renew" value="On" />
                  <InputShell label="Cancellation" value="Not requested" />
                </div>
                <div className="rounded-[1.35rem] border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-700">
                  Billing details open in a secure billing portal.
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                  <Button className="h-13 flex-1 rounded-[1.15rem] bg-sky-900 text-sm font-semibold text-white shadow-none hover:bg-sky-800">
                    Open billing portal
                  </Button>
                  <Button className="h-13 flex-1 rounded-[1.15rem] border border-zinc-200 bg-white text-sm font-semibold text-zinc-900 shadow-none hover:bg-zinc-50">
                    View invoices
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 shadow-[0_28px_90px_-50px_rgba(24,24,27,0.12)]">
            <CardHeader className="space-y-2 p-8 pb-4">
              <CardTitle className="text-[1.35rem] font-semibold tracking-[-0.03em] text-zinc-950">
                Plan details
              </CardTitle>
              <CardDescription className="text-sm leading-6 text-zinc-600">
                Your current billing and access details.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 p-8 pt-0 sm:grid-cols-2 xl:grid-cols-4">
              <InputShell label="Premium status" value="Active" />
              <InputShell label="Premium type" value="Subscription" />
              <InputShell label="Current period end" value="May 14, 2026" />
              <InputShell label="Invoices" value="Available" />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export { AccountSummaryMockupPage };
