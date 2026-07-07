import {
  Card,
  RefGroup,
  ResearchGroup,
  SourceNote,
  SynthSourcesNote,
  CitationBlock,
} from "../../ballot";
import { RC } from "../../../data/tax-rebate-62f";

export function BibliographyTab() {
  // Split studies into independent/nonpartisan vs. affiliated (campaign- or
  // advocacy-commissioned), mirroring the reference page's two research groups.
  const independent = RC.studies.filter((s) =>
    (s.affiliation ?? "").includes("nonpartisan"),
  );
  const affiliated = RC.studies.filter(
    (s) => !(s.affiliation ?? "").includes("nonpartisan"),
  );
  return (
    <div className="flex flex-col gap-[16px]">
      <Card
        title="Official Documentation"
        subtitle="The measure's certified documents and the statutes it would change, published unedited."
      >
        <div className="space-y-[20px]">
          <CitationBlock
            kind="official"
            title="Plain-language description of the ballot question"
          >
            <p className="font-['Nunito'] text-[14px] text-black leading-[1.6] mt-[4px]">
              This proposed law would change how the state's annual tax revenue
              limit under Chapter 62F is calculated. The limit would be set equal
              to the net state tax revenue actually collected in the prior year,
              increased by the average growth of Massachusetts wages and salaries
              over the previous three years — rather than the prior year's
              allowable limit. The proposed law would also count revenue from the
              4% income surtax on annual income above $1 million toward the
              definition of state tax revenue used to compute the limit. When
              collections exceed the limit, the excess is returned to taxpayers
              as under current law.
            </p>
            <SourceNote ids={["petition"]} />
          </CitationBlock>
          <RefGroup
            ids={["petition", "chapter62F", "section2BBBBBB", "h5006"]}
          />
        </div>
      </Card>

      <Card
        title="Research & Evidence"
        subtitle="Fiscal analyses relevant to the debate. Affiliation is named; MAPLE does not rank research by conclusion."
      >
        <div className="space-y-[20px]">
          <CitationBlock kind="ai">
            <p className="font-['Nunito'] text-[14px] text-black leading-[1.6]">
              The available analyses read the same mechanism in opposite ways.
              The proponents' brief projects that a cap tied to actual
              collections, with surtax revenue counted in, would have returned
              roughly $19 billion across 24 refunds over four decades, versus the
              two triggers under current law. MassBudget argues the same design
              would ratchet the cap downward after slow years and refunds,
              forcing unpredictable cuts and binding hardest after recessions.
              The nonpartisan literature on tax and expenditure limits documents
              both possibilities, and the business-aligned MTF — despite its
              fiscal-conservative orientation — concludes the change would be
              counterproductive for the state's finances.
            </p>
            <SynthSourcesNote
              ids={["maoBrief", "massBudget", "taxPolicyCenter", "mtfPosition"]}
              prompt="Summarize what fiscal analyses find about recalculating the 62F cap from actual collections and counting surtax revenue, naming each source's affiliation and where they diverge. Use only the sources listed below and cite nothing else. (Filler prompt for prototype purposes.)"
            />
          </CitationBlock>
          <ResearchGroup title="Independent / Nonpartisan Reference" studies={independent} />
          <ResearchGroup
            title="Advocacy- & Campaign-Affiliated Analysis"
            studies={affiliated}
          />
        </div>
      </Card>

      <Card
        title="Media"
        subtitle="Confirmed articles cited on this page, grouped by coverage focus."
      >
        <div className="space-y-[20px]">
          <CitationBlock kind="ai">
            <p className="font-['Nunito'] text-[14px] text-black leading-[1.6]">
              Coverage has tracked the measure from the November 2025 signature
              filing through certification, the February 2026 legislative
              pushback that branded the tax questions 'special interest'
              measures, and a March 2026 round of analyst debate over whether the
              change would improve competitiveness or destabilize the budget.
              Polling coverage found lopsided support for the general idea of more
              frequent refunds, while campaign-finance reporting described the
              largely in-kind support behind the YES committee and the absence of
              reported opposition spending in the first window.
            </p>
            <SynthSourcesNote
              ids={[
                "wburSigs",
                "cwbRecord",
                "masslive62F",
                "cwbBoogeyman",
                "wgbhAnalysts",
                "massBudget",
                "polityPoll",
                "ocpf",
              ]}
              prompt="Summarize how confirmed media coverage of the 62F reform question developed across the campaign — the signature drive, legislative pushback, the analyst debate, polling, and campaign finance. Use only the sources listed below and cite nothing else. (Filler prompt for prototype purposes.)"
            />
          </CitationBlock>
          <RefGroup
            title="Campaign & Ballot Path"
            ids={["wburSigs", "cwbRecord", "wburPreview"]}
          />
          <RefGroup
            title="The Fiscal Debate"
            ids={["masslive62F", "cwbBoogeyman", "wgbhAnalysts"]}
          />
          <RefGroup title="Polling" ids={["polityPoll"]} />
          <RefGroup title="Campaign Finance" ids={["ocpf"]} />
        </div>
      </Card>

      <Card title="Other References">
        <div className="space-y-[20px]">
          <RefGroup
            title="Campaign Committees"
            ids={["taxpayersForAffordableMA", "protectMAFuture"]}
          />
          <RefGroup
            title="Advocacy & Analysis"
            ids={["maoBrief", "massFiscalPraise", "mtfPosition", "fairShare"]}
          />
          <RefGroup title="Background" ids={["question3_1986", "question1_2022", "wbur62F2022"]} />
          <RefGroup title="Encyclopedia" ids={["ballotpedia"]} />
        </div>
        <p className="font-['Nunito'] text-[12px] text-[#808080] mt-[18px] leading-[1.5]">
          Inline citations throughout the page link to the matching entry here.
        </p>
      </Card>
    </div>
  );
}
