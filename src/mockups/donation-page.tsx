import { DonationCard } from "@/mockups/donation-card";

const DonationMockupPage = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.82),_transparent_30%),linear-gradient(180deg,#ece7da_0%,#f7f4ed_40%,#efebe2_100%)] px-4 py-8 text-zinc-950 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[980px] rounded-[2.6rem] border border-white/65 bg-white/72 p-5 shadow-[0_55px_140px_-70px_rgba(15,20,18,0.5)] backdrop-blur-xl sm:p-7 lg:p-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 ring-1 ring-amber-200">
              Donate
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-5xl">
              Make a donation
            </h1>
            <p className="max-w-2xl text-base leading-7 text-zinc-600">
              Choose an amount and enter your details.
            </p>
          </div>

          <DonationCard />
        </div>
      </div>
    </main>
  );
};

export { DonationMockupPage };
