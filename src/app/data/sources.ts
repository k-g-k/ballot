// Content for the 2026 Massachusetts Chapter 62F reform ballot question.
//
// All 62F-specific data and prose that drives the page lives here (and in
// ./sources). The section components in components/ballot render from these
// shapes, so this module parallels src/app/data/rent-control/content.ts exactly
// — a new ballot question is authored by supplying a parallel module, not by
// editing layout. Facts reference sources by id (see ./sources).

import type {
  Stakeholder,
  VoteSide,
  Arg,
  ArgSet,
  ArgSourceTag,
  ArgFilter,
  TL,
  ClaimRow,
  PollRow,
  Committee,
  Study,
} from "../../components/ballot/types";
import { SOURCES } from "./sources";

export const RC = {
  title: "Limit State Tax Collection Growth and Return Surpluses to Taxpayers",
  plain:
    "Change how the state's annual tax-revenue cap is calculated — basing it on the revenue actually collected and counting the 2022 income-surtax revenue — so that automatic taxpayer refunds under Chapter 62F are triggered more often.",
  tags: ["Tax Policy", "State Budget", "Taxpayer Refunds"],

  overviewSummary:
    "This measure would rewrite the formula behind Chapter 62F, the 1986 voter-approved law that returns money to taxpayers when state tax collections exceed an annual cap. It would base each year's cap on the revenue the state actually collected the prior year (rather than the maximum it was allowed to collect) and would fold in revenue from the 2022 'millionaire's tax.' The combined effect is a lower cap that the state is more likely to exceed — meaning automatic refunds would be triggered more frequently than under current law, which has paid out only twice in nearly 40 years.",

  yes: "The 62F cap is recalculated. Each year's limit is set from actual prior-year collections plus three-year wage growth, and surtax revenue counts toward the total — making the state more likely to exceed the cap and issue automatic refunds to taxpayers.",
  no: "No change in the law. Chapter 62F keeps its current formula, which bases the cap on the prior year's allowable limit and excludes 2022 surtax revenue; refunds continue to trigger only in the rare years collections run far ahead of the cap.",

  covered: [
    "All state tax revenue counted under Chapter 62F, recalculated from actual prior-year collections",
    "Revenue from the 2022 income surtax on earnings above $1 million (Section 2BBBBBB), newly counted toward the cap",
    "Every taxpayer who files a Massachusetts return, who receives any triggered refund in proportion to tax paid",
    "The state operating budget, whose available revenue is constrained by the lower recalculated cap",
  ],
  exempt: [
    "The 4% surtax rate itself — the measure counts surtax revenue toward the cap but does not repeal or lower the surtax",
    "Local (municipal) taxes, which are outside Chapter 62F entirely",
    "Federal funds and non-tax revenue, which are not 'State Tax Revenue' under the statute",
    "The dedicated purposes of surtax revenue (education and transportation) as a spending question — the measure changes the cap calculation, not the constitutional earmark",
  ],

  stakeholders: [
    {
      group: "Taxpayers (all filers)",
      impact: "benefits",
      body: "More frequent automatic refunds when collections exceed the recalculated cap. Refunds are distributed in proportion to income tax paid, so higher earners receive larger dollar amounts.",
      basis: "Petition text; proponent brief",
    },
    {
      group: "Higher-income filers",
      impact: "benefits",
      body: "Because 62F refunds are proportional to tax liability, the largest per-filer refund dollars flow to the highest earners — a distribution opponents highlight and proponents do not dispute.",
      basis: "Petition text; opposition framing",
    },
    {
      group: "State budget writers",
      impact: "cost",
      body: "A lower, ratcheting cap constrains how much revenue is available for the operating budget, and diversions into refunds reduce funds for programs and services.",
      basis: "Petition text",
    },
    {
      group: "Education & transportation (surtax-funded)",
      impact: "cost",
      disputed: true,
      body: "Opponents argue counting surtax revenue toward the cap could pull dollars voters dedicated to schools and transit into refunds; proponents dispute that the earmark is affected.",
      basis: "Disputed — depends on legal interpretation of the surtax earmark",
    },
    {
      group: "Public-sector workers & service users",
      impact: "cost",
      disputed: true,
      body: "The opposition committee projects layoffs and service cuts if billions are diverted from the budget; the size of any impact depends on future revenue and is contested.",
      basis: "Protect Massachusetts Future — projection, not an official estimate",
    },
    {
      group: "Business & fiscal-conservative groups",
      impact: "benefits",
      body: "Supporters view a tighter cap as restoring spending discipline and improving competitiveness. Some business-aligned fiscal watchdogs (MTF) nonetheless oppose it as destabilizing.",
      basis: "Proponent statements; MTF opposition",
    },
  ] as Stakeholder[],

  overviewFraming:
    "Supporters argue the 62F cap has been quietly loosened over time — especially by excluding the 2022 surtax — so a law voters approved to force refunds now almost never does; recalculating from actual collections would restore its original bite. Opponents argue the change would ratchet the cap steadily downward, make revenue less predictable, and divert billions from schools, transit, and public services toward refunds that flow disproportionately to high earners. The support campaign is well funded and largely in-kind; organized opposition had not reported spending in the first filing window.",

  overviewVotes: {
    yes: {
      vote: "yes",
      summary: "Recalculates the 62F cap so refunds trigger more often.",
      organizerIds: ["mass-opportunity-alliance", "taxpayers-affordable-ma"],
      funding: "$1.71M",
      sideLabel: "Endorsing Orgs",
      official: {
        text: "This is placeholder language standing in for the endorsing parties' official statement as it will appear in the Information for Voters once the question is numbered. It will lay out, in the state's official wording, why supporters believe voters should vote YES to restore the taxpayer-refund guarantee of Chapter 62F.",
        who: "Rep for Taxpayers for an Affordable Massachusetts",
      },
    },
    no: {
      vote: "no",
      summary: "Keeps the current 62F formula unchanged.",
      organizerIds: ["protect-ma-future"],
      funding: "$0",
      sideLabel: "Opposing Orgs",
      official: {
        text: "This is placeholder language standing in for the opposing parties' official statement as it will appear in the Information for Voters once the question is numbered. It will lay out, in the state's official wording, why opponents believe voters should vote NO to protect funding for schools, healthcare, and public services.",
        who: "Rep for Protect Massachusetts Future",
      },
    },
  } as { yes: VoteSide; no: VoteSide },

  timeline: [
    {
      when: "Aug 7, 2025",
      label: "Petition filed",
      body: "The Attorney General announced the initiative had been filed (No. 25-17).",
      ids: ["ballotpedia", "petition"],
    },
    {
      when: "Sep 3, 2025",
      label: "Cleared for signatures",
      body: "The AG certified the petition; signature gathering began.",
      ids: ["ballotpedia"],
    },
    {
      when: "Nov 19, 2025",
      label: "Signatures submitted",
      body: "Supporters announced they had gathered roughly 86,000 first-round signatures.",
      ids: ["wburSigs", "cwbRecord"],
    },
    {
      when: "Dec 30, 2025",
      label: "Signatures certified",
      body: "The Elections Division certified 85,588 valid signatures (74,574 required), sending the measure to the Legislature.",
      ids: ["ballotpedia"],
    },
    {
      when: "Feb 5, 2026",
      label: "Introduced as H.5006",
      body: "The initiative entered the Legislature as House Bill 5006.",
      ids: ["h5006"],
    },
    {
      when: "Feb 2026",
      label: "Legislative leaders push back",
      body: "Senate President Spilka and others labeled the tax questions as special-interest measures benefiting high earners.",
      ids: ["masslive62F"],
    },
    {
      when: "Mar 30, 2026",
      label: "Fiscal analysts weigh in",
      body: "MassBudget testified in opposition; analysts debated whether the change would improve competitiveness or destabilize the budget.",
      ids: ["massBudget", "wgbhAnalysts"],
    },
    {
      when: "May 5, 2026",
      label: "Legislature does not act",
      body: "With no legislative approval by the deadline, second-round signature collection began.",
      ids: ["ballotpedia"],
    },
  ] as TL[],

  processFacts: [
    {
      k: "Measure type",
      v: "Indirect initiated state statute — goes to the Legislature first, then to voters if it does not act.",
      ids: ["ballotpedia"],
    },
    {
      k: "First-round signatures",
      v: "74,574 required (3% of the last gubernatorial vote); ~86,000 submitted; 85,588 certified.",
      ids: ["ballotpedia", "wburSigs"],
    },
    {
      k: "Second-round signatures",
      v: "12,429 required (0.5%); deadline July 1, 2026.",
      ids: ["ballotpedia"],
    },
    {
      k: "Distribution rule",
      v: "No more than 25% of certified signatures may come from a single county.",
      ids: ["ballotpedia"],
    },
    {
      k: "Approval threshold",
      v: "A simple majority approves the measure, but affirmative votes must exceed 30% of all votes cast in the election.",
      ids: ["ballotpedia"],
    },
    {
      k: "Legislative window",
      v: "The Legislature had until the first Wednesday of May 2026 to enact the measure; it did not, triggering the second signature round.",
      ids: ["ballotpedia"],
    },
  ],

  relatedContext: [
    {
      k: "Current law (62F)",
      v: "Chapter 62F, created by Question 3 in 1986, caps allowable state tax revenue at the prior year's limit plus three-year wage growth; excess is refunded. It has triggered only twice in ~40 years — most recently ~$3B in 2022.",
      ids: ["chapter62F", "question3_1986", "wbur62F2022"],
    },
    {
      k: "The surtax carve-in",
      v: "Revenue from the 2022 'millionaire's tax' (4% on income above $1M, Section 2BBBBBB) is not currently counted as State Tax Revenue under 62F; this measure would count it toward the cap.",
      ids: ["section2BBBBBB", "question1_2022", "fairShare"],
    },
    {
      k: "Companion question",
      v: "The same coalition is backing a separate 2026 question to cut the state income tax rate from 5% to 4%; the two are frequently discussed and funded together.",
      ids: ["cwbBoogeyman", "masslive62F"],
    },
    {
      k: "Other states",
      v: "Massachusetts is one of 19 states with a tax revenue limit and one of eight with a revenue limit but no separate expenditure limit.",
      ids: ["taxPolicyCenter"],
    },
  ],

  // "All" — the best and most common arguments rolled up across the source
  // categories (fiscal research, organization / elected-official testimony),
  // with design points derived from the official documents.
  yesArgs: [
    {
      title: "Restores a Guarantee Voters Already Approved",
      body: "Supporters argue voters passed 62F in 1986 precisely to force automatic refunds when the state over-collects — but exclusions, especially the surtax carve-out, have made it trigger only twice in 40 years. Recalculating from actual collections restores the protection as intended.",
    },
    {
      title: "Spending Has Outpaced Wages",
      body: "The proponents' brief argues state spending has grown at nearly double the rate of Massachusetts wages and inflation, and that a revised cap tied to actual collections would have returned roughly $19 billion to taxpayers over four decades.",
    },
    {
      title: "Automatic, Broad-Based Relief",
      body: "Because the refund is triggered by a formula rather than a legislative vote, supporters frame it as reliable relief that reaches every filer when the state runs a genuine surplus — not a discretionary giveaway.",
    },
  ] as Arg[],
  noArgs: [
    {
      title: "It Ratchets the Budget Down Over Time",
      body: "Opponents argue basing each year's cap on actual collections means every slow-revenue year or refund permanently lowers the ceiling, steadily shrinking the revenue available for public services regardless of need.",
    },
    {
      title: "Cuts Hit Schools, Transit, and Health Care",
      body: "The opposition campaign projects that diverting billions from the budget — and counting dedicated surtax revenue toward the cap — would force layoffs and cuts to classrooms, hospitals, and infrastructure that communities depend on.",
    },
    {
      title: "The Benefits Flow to the Top",
      body: "Because 62F refunds are proportional to tax paid, critics note the largest dollar refunds go to the highest earners, while the services cut to fund them are used most by everyone else.",
    },
  ] as Arg[],

  // Per-source argument sets for the glance filters.
  argsBySource: {
    official: {
      yes: [
        {
          title: "The Text Ties the Cap to Real Collections",
          body: "The petition recalculates the limit from the net revenue actually collected the prior year, which supporters say closes the gap between the cap voters intended and the far higher ceiling that has accumulated under current law.",
        },
        {
          title: "It Names the Surtax Explicitly",
          body: "By adding Section 2BBBBBB revenue to the definition of State Tax Revenue, the text directly counts the 2022 surtax toward the cap — the specific 'loophole' supporters say has kept 62F from triggering.",
        },
        {
          title: "Relief Is Automatic, Not Discretionary",
          body: "Because 62F operates by formula, the text produces refunds without a legislative vote whenever collections exceed the recalculated cap — the mechanism supporters value most.",
        },
      ],
      no: [
        {
          title: "The Formula Only Moves One Direction",
          body: "Basing next year's cap on this year's actual collections means the ceiling falls after every weak year and never fully recovers — a ratchet the official text builds in with no floor or recovery mechanism.",
        },
        {
          title: "No Carve-Out for Dedicated Revenue",
          body: "The text folds surtax revenue into the cap without exempting the education and transportation purposes voters attached to it in 2022, raising an unresolved conflict between two voter mandates.",
        },
        {
          title: "No Adjustment for Recessions",
          body: "The text contains no provision to suspend the tighter cap during downturns, when refunds would most reduce the state's ability to invest counter-cyclically.",
        },
      ],
    },
    academic: {
      yes: [
        {
          title: "Tax Limits Can Enforce Discipline",
          body: "The tax-and-expenditure-limit literature holds that formula-based caps can restrain spending growth relative to the economy — the discipline supporters say 62F was meant to provide.",
        },
        {
          title: "Actual-Collections Bases Are Common",
          body: "Anchoring a limit to realized revenue rather than a theoretical maximum is a recognized TEL design; proponents argue it simply makes the cap track what the state truly takes in.",
        },
        {
          title: "Predictable Rules Beat Ad Hoc Rebates",
          body: "A standing formula gives taxpayers and markets a clear rule, which supporters contrast with one-off, politically timed relief packages.",
        },
      ],
      no: [
        {
          title: "Ratcheting Caps Are a Known Failure Mode",
          body: "Fiscal analysts warn that limits pegged to actual revenue can 'ratchet' downward after recessions, locking in austerity — the pattern MassBudget projects here.",
        },
        {
          title: "Volatility Undermines Planning",
          body: "Because the cap would move with revenue swings, multi-year commitments to schools, transit, and debt service become harder to budget, raising the cost of volatility.",
        },
        {
          title: "Counter-Cyclical Investment Gets Harder",
          body: "The research on TELs finds they can bind hardest exactly when states most need to spend, weakening the tools available to soften downturns.",
        },
      ],
    },
    organization: {
      yes: [
        {
          title: "Close the 62F Loophole",
          body: "Business and fiscal-policy groups frame the surtax carve-out as a loophole that has neutered a popular law, and the fix as simply restoring what voters approved.",
        },
        {
          title: "Competitiveness and Cost of Living",
          body: "Supporting organizations argue predictable tax relief helps retain residents and employers as living costs rise, and that spending discipline improves the state's competitive position.",
        },
        {
          title: "Give Money Back When Surpluses Are Real",
          body: "Endorsing groups emphasize the measure only returns money when collections genuinely exceed the cap — relief tied to real surpluses, not new borrowing.",
        },
      ],
      no: [
        {
          title: "Billions Out of a Fixed Budget",
          body: "Labor and community groups argue removing several billion dollars from a roughly $61B budget would destabilize the workforce and the services families rely on.",
        },
        {
          title: "Even Fiscal Watchdogs Are Wary",
          body: "The business-aligned Massachusetts Taxpayers Foundation opposes the measure, arguing its impacts would be counterproductive for the state's fiscal sustainability.",
        },
        {
          title: "It Undercuts What Voters Just Funded",
          body: "Opponents note voters approved the surtax in 2022 to fund education and transportation, and say counting that revenue toward a refund cap works against that recent choice.",
        },
      ],
    },
    elected: {
      yes: [
        {
          title: "Voters Deserve the Refund They Approved",
          body: "Sympathetic officials frame a YES as honoring the 1986 vote — restoring an automatic taxpayer protection rather than leaving it dormant.",
        },
        {
          title: "Pressure to Control Spending",
          body: "Some officials view the measure as a check on budget growth that has, in their telling, outpaced what taxpayers can sustain.",
        },
        {
          title: "Relief as Cost-of-Living Response",
          body: "Officials channel affordability frustration into support, arguing periodic refunds put money back in residents' pockets when the state runs ahead.",
        },
      ],
      no: [
        {
          title: "A Special-Interest Tax Cut",
          body: "Senate President Spilka and other leaders characterize the tax questions as special-interest measures whose benefits flow mainly to high earners.",
        },
        {
          title: "Unequal Refunds",
          body: "Officials point out that under 62F's proportional formula, millionaires receive far larger refunds than minimum-wage workers for the same measure.",
        },
        {
          title: "Danger During Federal Uncertainty",
          body: "Legislators warn that constraining revenue during a period of federal funding uncertainty would leave the state unable to backfill lost programs.",
        },
      ],
    },
    citizen: { yes: [], no: [] },
  } as Record<ArgSourceTag, ArgSet>,

  consensus: [
    "Chapter 62F currently triggers refunds only in rare years — twice in nearly four decades — and the measure would make triggers more frequent.",
    "Refunds under 62F are distributed in proportion to income tax paid, so higher earners receive larger dollar amounts; both sides describe the mechanism the same way.",
    "The measure changes how the revenue cap is calculated; it does not repeal the 2022 surtax rate itself.",
  ],
  disagreement: [
    "Whether counting surtax revenue toward the cap 'closes a loophole' or overrides the dedicated education-and-transportation purpose voters approved in 2022.",
    "Whether an actual-collections base restores the law's original intent or 'ratchets' the budget steadily downward.",
    "The size and probability of service cuts — the central empirical dispute.",
    "Whether more frequent refunds are broad-based relief or a transfer skewed toward high earners.",
    "Whether tighter caps help or hurt the state's competitiveness and fiscal stability.",
  ],
  openQuestions: [
    "How the recalculated cap would interact legally with the constitutional earmark on surtax revenue for education and transportation.",
    "How often refunds would actually trigger under real future revenue paths — estimates depend on assumptions the text does not fix.",
    "Whether the cap would bind hardest during or after recessions, and with what effect on counter-cyclical spending.",
    "What the official statement of fiscal consequences will say once the Information for Voters is published.",
    "How the measure interacts with the companion income-tax-cut question if both pass.",
    "Whether the Legislature would seek to amend the statute after passage, as it may for voter-approved statutes.",
  ],

  // Checkable claims pulled from the arguments for and against, then vetted.
  claims: [
    {
      claim:
        "Chapter 62F has triggered taxpayer refunds only twice since 1986.",
      mark: "verified",
      source: "outside",
      note: "Confirmed by Ballotpedia and reporting on the 2022 trigger (~$3B refunded) — the second in the law's history.",
      ids: ["ballotpedia", "wbur62F2022"],
    },
    {
      claim:
        "62F refunds are distributed in proportion to income tax paid, so higher earners receive larger amounts.",
      mark: "verified",
      source: "outside",
      note: "The proportional-to-liability design is a feature of the statute and was borne out in the 2022 distribution; not in dispute between the campaigns.",
      ids: ["chapter62F", "masslive62F"],
    },
    {
      claim:
        "“A revised revenue limit would have returned nearly $19 billion to taxpayers over four decades (24 refunds).”",
      mark: "attributed",
      source: "outside",
      note: "From the Massachusetts Opportunity Alliance policy brief, which supports the measure — a proponent projection based on its own recalculation, not an independent estimate.",
      ids: ["maoBrief"],
    },
    {
      claim:
        "“The measures would strip billions from classrooms, hospitals, and research and eliminate hundreds of thousands of jobs.”",
      mark: "attributed",
      source: "testimony",
      note: "Asserted by Protect Massachusetts Future about the two tax questions combined — a campaign projection, not an official fiscal estimate.",
      ids: ["protectMAFuture", "mapleTestimony"],
    },
    {
      claim:
        "“Millionaires will get $10,000 back from the income-tax cut; minimum-wage workers get $300.”",
      mark: "attributed",
      source: "testimony",
      note: "Asserted by Senate President Spilka; the figures describe the companion income-tax question, not 62F directly, though the distributional point is applied to both.",
      ids: ["masslive62F", "mapleTestimony"],
    },
  ] as ClaimRow[],

  studies: [
    {
      citation: "Massachusetts Opportunity Alliance, Policy Brief (2025)",
      affiliation: "commissioned by the campaign supporting the measure",
      finding:
        "Projects that recalculating the 62F limit from actual collections would have triggered refunds 24 times over four decades, returning roughly $19 billion; argues spending has grown near double the rate of wages and inflation.",
      url: SOURCES.maoBrief.url,
    },
    {
      citation: "Massachusetts Budget & Policy Center, Testimony (2026)",
      affiliation: "opposes the measure",
      finding:
        "Argues the reform would ratchet the revenue cap down after slow years and refunds, forcing unpredictable cuts and impairing counter-cyclical investment following recessions.",
      url: SOURCES.massBudget.url,
    },
    {
      citation: "Tax Policy Center, Tax and Expenditure Limits (briefing)",
      affiliation: "nonpartisan reference",
      finding:
        "Describes how TELs work across states; notes Massachusetts is one of 19 states with a tax revenue limit and one of eight with a revenue limit but no expenditure limit.",
      url: SOURCES.taxPolicyCenter.url,
    },
    {
      citation: "Massachusetts Taxpayers Foundation, Position Paper (2026)",
      affiliation: "business-aligned; opposes the measure",
      finding:
        "Concludes the 62F and income-tax questions would be counterproductive for affordability, competitiveness, and fiscal sustainability, and offers an alternative agenda.",
      url: SOURCES.mtfPosition.url,
    },
  ] as Study[],

  mediaPhases: [
    {
      phase: "The competitiveness-vs-chaos debate",
      when: "March 2026",
      articles: [
        {
          outlet: "GBH News",
          title:
            "More competitive or more chaotic? Tax cut analysts paint possible outcomes",
          url: SOURCES.wgbhAnalysts.url,
          type: "News",
        },
        {
          outlet: "Mass. Budget & Policy Center",
          title:
            "Testimony in opposition to the two anti-tax ballot initiatives",
          url: SOURCES.massBudget.url,
          type: "Testimony",
        },
      ],
    },
    {
      phase: "Legislative pushback",
      when: "February 2026",
      articles: [
        {
          outlet: "MassLive",
          title:
            "Top legislators slap 'special interest' tag on ballot questions",
          url: SOURCES.masslive62F.url,
          type: "News",
        },
        {
          outlet: "CommonWealth Beacon",
          title: "Tax ballot questions emerging as Beacon Hill boogeyman",
          url: SOURCES.cwbBoogeyman.url,
          type: "News",
        },
      ],
    },
    {
      phase: "Signature drive & certification",
      when: "November – December 2025",
      articles: [
        {
          outlet: "WBUR",
          title:
            "Ballot questions expected to move forward after signature filing",
          url: SOURCES.wburSigs.url,
          type: "News",
        },
        {
          outlet: "WBUR",
          title:
            "Massachusetts could see a record number of ballot questions in 2026",
          url: SOURCES.wburPreview.url,
          type: "News",
        },
      ],
    },
  ],

  polls: [
    {
      pollster: "Polity Research Consulting (for Retailers Assoc. of MA)",
      dates: "Apr 29 – May 7, 2026",
      sample: "608 respondents",
      moe: "±3.97%",
      support: 76,
      oppose: 12,
      undecided: 12,
      ids: ["polityPoll", "ballotpedia"],
    },
  ] as PollRow[],

  committees: [
    {
      name: "Taxpayers for an Affordable Massachusetts",
      stance: "yes",
      total: "$1,707,296",
      cash: "$100,000",
      inKind: "$1,607,296",
      spent: "$1,607,296",
      note: "Support is overwhelmingly in-kind, driven by the Massachusetts Opportunity Alliance; the committee also backs the companion income-tax-cut question.",
      donors: [
        {
          name: "Massachusetts Opportunity Alliance",
          amount: "$1,600,000",
          kind: "in-kind",
        },
        {
          name: "Massachusetts High Technology Council",
          amount: "$57,296",
          kind: "cash + in-kind",
        },
        { name: "Pioneer Institute", amount: "$50,000", kind: "cash" },
      ],
    },
    {
      name: "Protect Massachusetts Future",
      stance: "no",
      total: "$0",
      cash: "$0",
      inKind: "$0",
      spent: "$0",
      note: "The opposition committee had registered but reported no contributions or spending through the January 20, 2026 filing window; its coalition is led by labor and community organizations.",
      donors: [],
    },
  ] as Committee[],
};

// ── Citizen Deliberations content ──────────────────────────────────────────
export const DELIB_THEMES: {
  title: string;
  agreed: string;
  split: string;
  tradeoff: string;
}[] = [
  {
    title: "Almost everyone liked the idea of a refund — the mechanism was the question",
    agreed:
      "Getting money back when the state genuinely over-collects was broadly popular; “never trigger a refund” was almost nobody's position.",
    split:
      "Whether basing the cap on actual collections restores the law's intent or quietly ratchets the budget down over time.",
    tradeoff:
      "Reliable automatic relief now vs. a lower ceiling that could force cuts in lean years later.",
  },
  {
    title: "The surtax carve-in was the single most contested detail",
    agreed:
      "Participants understood that counting surtax revenue toward the cap is what makes refunds trigger more often — the mechanics were clear once explained.",
    split:
      "Whether that 'closes a loophole' or overrides the education-and-transportation purpose voters attached to that money in 2022.",
    tradeoff:
      "Honoring the 1986 refund vote vs. honoring the 2022 surtax-earmark vote when the two pull against each other.",
  },
  {
    title: "Who benefits became a values question, not just a numbers question",
    agreed:
      "Everyone accepted that proportional refunds send larger dollar amounts to higher earners; the fact itself wasn't disputed.",
    split:
      "Whether that distribution is fair (you get back in proportion to what you paid) or regressive (services cut to fund it are used by everyone).",
    tradeoff:
      "Returning surpluses by a neutral formula vs. directing constrained dollars to the services with the widest reach.",
  },
];

export const DELIB_TRANSCRIPTS = [
  {
    title: "Worcester in-person cohort, session 2",
    meta: "Oct 2026 · 13 participants · 2h 05m · facilitated by GenUnity",
  },
  {
    title: "Springfield Democracy Hub session",
    meta: "Oct 2026 · 11 participants · 1h 40m · with Mass Voter Table",
  },
  {
    title: "Statewide online session 1",
    meta: "Nov 2026 · 20 participants · 1h 30m",
  },
];

// ── Argument-filter config (For & Against) ─────────────────────────────────
export const ARG_FILTERS: { id: ArgFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "organization", label: "Organizations" },
  { id: "elected", label: "Elected Officials" },
  { id: "citizen", label: "Citizen" },
];

export const ARG_FILTER_IDS: Record<ArgFilter, string[]> = {
  all: ["petition", "maoBrief", "massBudget", "mapleTestimony"],
  official: ["petition", "chapter62F", "section2BBBBBB"],
  academic: ["taxPolicyCenter", "massBudget", "maoBrief"],
  organization: ["mapleTestimony", "massFiscalPraise", "mtfPosition"],
  elected: ["mapleTestimony", "masslive62F"],
  citizen: ["mapleTestimony"],
};
