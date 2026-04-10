import { ArrowRight, History, UserSearch } from "lucide-react";

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

const SupportOverrideMockupPage = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.82),_transparent_30%),linear-gradient(180deg,#ece7da_0%,#f7f4ed_40%,#efebe2_100%)] px-4 py-8 text-zinc-950 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1240px] rounded-[2.6rem] border border-white/65 bg-white/72 p-5 shadow-[0_55px_140px_-70px_rgba(15,20,18,0.5)] backdrop-blur-xl sm:p-7 lg:p-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-800 ring-1 ring-rose-200">
              Support access
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl">
              Find an account
            </h1>
            <p className="max-w-3xl text-base leading-7 text-zinc-600">
              Search by email, username, or user ID.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-linear-to-b from-white via-white to-zinc-50 shadow-[0_28px_90px_-50px_rgba(24,24,27,0.12)]">
              <CardHeader className="space-y-4 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <div className="flex size-13 items-center justify-center rounded-[1.15rem] bg-zinc-950 text-white">
                      <UserSearch className="size-5" />
                    </div>
                    <div className="space-y-1.5">
                      <CardTitle className="text-[1.6rem] font-semibold tracking-[-0.03em] text-zinc-950">
                        User lookup
                      </CardTitle>
                      <CardDescription className="text-sm leading-6 text-zinc-600">
                        Find the right account.
                      </CardDescription>
                    </div>
                  </div>
                  <span className="inline-flex whitespace-nowrap rounded-full bg-zinc-100 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] text-zinc-700 ring-1 ring-zinc-200">
                    Support
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 p-8 pt-0">
                <InputShell label="Email" value="name@example.com" />
                <InputShell label="User name" value="Alex Johnson" />
                <InputShell label="User ID" value="#2048" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Effective access" value="Premium" />
                  <InputShell label="Underlying state" value="Subscription active" />
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                  <Button className="h-13 flex-1 rounded-[1.15rem] bg-zinc-950 text-sm font-semibold text-white shadow-none hover:bg-zinc-800">
                    Search
                  </Button>
                  <Button className="h-13 flex-1 rounded-[1.15rem] border border-zinc-200 bg-white text-sm font-semibold text-zinc-900 shadow-none hover:bg-zinc-50">
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-linear-to-b from-zinc-50 via-white to-white shadow-[0_28px_90px_-50px_rgba(24,24,27,0.12)]">
              <CardHeader className="space-y-4 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <div className="flex size-13 items-center justify-center rounded-[1.15rem] bg-zinc-950 text-white">
                      <ArrowRight className="size-5" />
                    </div>
                    <div className="space-y-1.5">
                      <CardTitle className="text-[1.6rem] font-semibold tracking-[-0.03em] text-zinc-950">
                        Update access
                      </CardTitle>
                      <CardDescription className="text-sm leading-6 text-zinc-600">
                        Change premium access when needed.
                      </CardDescription>
                    </div>
                  </div>
                  <span className="inline-flex whitespace-nowrap rounded-full bg-amber-100 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] text-amber-900 ring-1 ring-amber-200">
                    Manual
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 p-8 pt-0">
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Current access" value="Premium" />
                  <InputShell label="Target access" value="Non-premium" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Manual update" value="Active" />
                  <InputShell label="Update until" value="June 14, 2026" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <InputShell label="Reason" value="Payment matched manually" />
                  <InputShell label="Confirmation" value="Review before save" />
                </div>
                <div className="rounded-[1.35rem] border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-700">
                  Review the details before saving changes.
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                  <Button className="h-13 flex-1 rounded-[1.15rem] bg-zinc-950 text-sm font-semibold text-white shadow-none hover:bg-zinc-800">
                    Save update
                  </Button>
                  <Button className="h-13 flex-1 rounded-[1.15rem] border border-zinc-200 bg-white text-sm font-semibold text-zinc-900 shadow-none hover:bg-zinc-50">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 shadow-[0_28px_90px_-50px_rgba(24,24,27,0.12)]">
            <CardHeader className="space-y-2 p-8 pb-4">
              <CardTitle className="text-[1.35rem] font-semibold tracking-[-0.03em] text-zinc-950">
                Search results
              </CardTitle>
              <CardDescription className="text-sm leading-6 text-zinc-600">
                Matching accounts for the current search.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="overflow-hidden rounded-[1.35rem] border border-zinc-200 bg-white">
                <div className="grid grid-cols-5 gap-4 border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  <div>Name</div>
                  <div>Email</div>
                  <div>User ID</div>
                  <div>Premium</div>
                  <div>Action</div>
                </div>
                {[
                  ["Alex Johnson", "name@example.com", "#2048", "Active", "Open"],
                  ["Alex Brown", "alex@example.com", "#3190", "Inactive", "Open"],
                ].map((row, index) => (
                  <div
                    className={`grid grid-cols-5 gap-4 border-b border-zinc-100 px-4 py-4 text-sm text-zinc-700 last:border-b-0 ${
                      index === 0 ? "bg-emerald-50/50" : "bg-white"
                    }`}
                    key={row.join("-")}
                  >
                    {row.map((cell, cellIndex) => (
                      <div key={cell} className={cellIndex === 4 ? "font-semibold text-emerald-700" : ""}>
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <Card className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 shadow-[0_28px_90px_-50px_rgba(24,24,27,0.12)]">
              <CardHeader className="space-y-4 p-8 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <CardTitle className="text-[1.35rem] font-semibold tracking-[-0.03em] text-zinc-950">
                      Current access
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-zinc-600">
                      Current access and subscription details.
                    </CardDescription>
                  </div>
                  <span className="inline-flex whitespace-nowrap rounded-full bg-emerald-100 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] text-emerald-900 ring-1 ring-emerald-200">
                    Premium
                  </span>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 p-8 pt-0 sm:grid-cols-2">
                <InputShell label="Effective status" value="Premium" />
                <InputShell label="Recorded source" value="Subscription" />
                <InputShell label="Subscription status" value="Active" />
                <InputShell label="Period end" value="May 14, 2026" />
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 shadow-[0_28px_90px_-50px_rgba(24,24,27,0.12)]">
              <CardHeader className="space-y-4 p-8 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-[1rem] bg-zinc-950 text-white">
                      <History className="size-4.5" />
                    </div>
                    <div className="space-y-1.5">
                      <CardTitle className="text-[1.35rem] font-semibold tracking-[-0.03em] text-zinc-950">
                        Update history
                      </CardTitle>
                      <CardDescription className="text-sm leading-6 text-zinc-600">
                        Recent changes for this account.
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="overflow-hidden rounded-[1.35rem] border border-zinc-200 bg-white">
                  <div className="grid grid-cols-4 gap-4 border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    <div>Date</div>
                    <div>By</div>
                    <div>Change</div>
                    <div>Reason</div>
                  </div>
                  {[
                    ["Apr 08, 2026", "Mike", "Premium -> Non-premium", "Charge mismatch"],
                    ["Apr 02, 2026", "Anna", "Non-premium -> Premium", "Manual recovery"],
                  ].map((row) => (
                    <div className="grid grid-cols-4 gap-4 border-b border-zinc-100 px-4 py-4 text-sm text-zinc-700 last:border-b-0" key={row.join("-")}>
                      {row.map((cell) => (
                        <div key={cell}>{cell}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/90 shadow-[0_28px_90px_-50px_rgba(24,24,27,0.12)]">
            <CardHeader className="space-y-2 p-8 pb-4">
              <CardTitle className="text-[1.35rem] font-semibold tracking-[-0.03em] text-zinc-950">
                Recent payments
              </CardTitle>
              <CardDescription className="text-sm leading-6 text-zinc-600">
                Payment activity for this account.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="overflow-hidden rounded-[1.35rem] border border-zinc-200 bg-white">
                <div className="grid grid-cols-6 gap-4 border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  <div>Date</div>
                  <div>Type</div>
                  <div>Amount</div>
                  <div>Status</div>
                  <div>Refund</div>
                  <div>Receipt</div>
                </div>
                {[
                  ["Apr 08, 2026", "Subscription", "$15.00", "Paid", "No", "Open"],
                  ["Mar 08, 2026", "Subscription", "$15.00", "Paid", "No", "Open"],
                  ["Feb 22, 2026", "Donation", "$25.00", "Paid", "No", "Open"],
                ].map((row) => (
                  <div
                    className="grid grid-cols-6 gap-4 border-b border-zinc-100 px-4 py-4 text-sm text-zinc-700 last:border-b-0"
                    key={row.join("-")}
                  >
                    {row.map((cell) => (
                      <div key={cell}>{cell}</div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export { SupportOverrideMockupPage };
