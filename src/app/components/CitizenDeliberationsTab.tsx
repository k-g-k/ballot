import { SynthSummaryCard, Card } from "../../ballot";
import { RC } from "../../../data/tax-rebate-62f";
import { VoteCard } from "../vote-card";
import { FollowedTestimonyCard, type StanceFilter } from "../testimony";

export function OverviewTab({
  onOpenFinance,
  onViewTestimony,
}: {
  onOpenFinance?: () => void;
  onViewTestimony?: (stance: StanceFilter) => void;
}) {
  return (
    <div className="flex flex-col gap-[16px]">
      <SynthSummaryCard
        title="Summary of Initiative"
        ids={["petition", "chapter62F", "ballotpedia"]}
        prompt="Summarize Petition No. 25-17 in plain language for a general audience: what the measure changes about the Chapter 62F revenue cap, how the surtax carve-in works, and how the two campaigns frame it. Use only the sources listed below and cite nothing else. (Filler prompt for prototype purposes.)"
      >
        <p>{RC.overviewSummary}</p>
      </SynthSummaryCard>

      {/* Yes / No comparison — organizers, funding, testifying orgs, official statements */}
      <div className="flex gap-[16px] max-lg:flex-col">
        <VoteCard
          d={RC.overviewVotes.yes}
          onOpenFinance={onOpenFinance}
          onViewTestimony={() => onViewTestimony?.("endorsing")}
        />
        <VoteCard
          d={RC.overviewVotes.no}
          onOpenFinance={onOpenFinance}
          onViewTestimony={() => onViewTestimony?.("opposing")}
        />
      </div>

      <SynthSummaryCard
        title="Research & Evidence"
        subtitle="Fiscal analyses relevant to the debate. Affiliation is named; MAPLE does not rank research by conclusion."
        ids={["policyResearch", "maoBrief", "massBudget"]}
        prompt="Summarize what fiscal analyses say about recalculating the 62F cap from actual collections and counting surtax revenue — how often refunds would trigger, and the risk of a downward-ratcheting cap. Name each source's affiliation. Use only the sources listed below and cite nothing else. (Filler prompt for prototype purposes.)"
      >
        <p>
          The analyses divide along their framing of the same mechanism. The
          proponents' brief projects that a cap tied to actual collections —
          with surtax revenue counted in — would have returned taxpayers roughly
          $19 billion across 24 refunds over four decades, versus the two
          triggers the current formula has produced. Opponents, including
          MassBudget, argue that same design would ratchet the cap downward after
          every slow year or refund, making the budget less predictable and
          binding hardest after recessions. The general literature on tax and
          expenditure limits notes both effects are real: formula caps can
          restrain spending growth and can lock in austerity, depending on how
          they are built.
        </p>
      </SynthSummaryCard>

      {/* Featured testimony from followed accounts — also on Public Perspectives. */}
      <FollowedTestimonyCard />

      <Card title="Still deciding? Ask MAPLE about this measure">
        <p className="font-['Nunito'] text-[14px] text-black leading-[1.6]">
          Ask a plain question —{" "}
          <span className="italic">
            "If the state runs a surplus next year, would I actually get a refund
            under this?"
          </span>{" "}
          — here on the page or through your own AI assistant. Answers draw only
          from the sources on this page and cite them.
        </p>
        <div className="flex items-center gap-[20px] mt-[16px] flex-wrap">
          <button className="bg-white border-[1.5px] border-[#12266f] text-[#12266f] font-['Nunito'] font-bold text-[13px] px-[20px] py-[8px] rounded-[100px] cursor-pointer hover:bg-[rgba(232,239,255,0.4)]">
            Ask on MAPLE
          </button>
          <button className="font-['Nunito'] font-bold text-[13px] text-[#12266f] hover:text-[#c71e32] underline underline-offset-[4px] cursor-pointer">
            Connect your assistant (MCP) →
          </button>
        </div>
      </Card>
    </div>
  );
}
