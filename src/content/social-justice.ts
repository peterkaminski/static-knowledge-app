import type { Module } from "../types/content";

const module: Module = {
  meta: {
    title: "Understanding Social Justice",
    slug: "social-justice",
    description:
      "A comprehensive exploration of social justice — its philosophical roots, key movements, systemic dimensions, and paths to action. Designed for learners who want to move beyond surface-level awareness toward informed engagement.",
    audience: ["high school", "undergrad", "general public"],
    author: "Open Source Contributors",
    license: "CC0 1.0 Universal",
    version: "1.0.0",
  },

  sections: [
    // ── Section 1: What Is Social Justice? ──────────────────────────
    {
      id: "what-is-social-justice",
      title: "What Is Social Justice?",
      order: 1,
      summary: `Social justice is the principle that every person deserves equal economic, political, and social rights and opportunities. It is not a single idea but a family of overlapping commitments: fairness in how institutions distribute advantages and disadvantages, recognition of the dignity of every individual, and meaningful participation for all people in the decisions that shape their lives.

The term has roots stretching back to the 1840s, when Jesuit philosopher Luigi Taparelli d'Azeglio used it to argue that the structures of society — not just the behavior of individuals — bear moral weight. Today, social justice encompasses debates about wealth inequality, racial discrimination, gender equity, disability rights, LGBTQ+ inclusion, environmental burdens, and much more.

Three philosophical pillars recur across most social justice frameworks:

**Distributive justice** asks how goods, opportunities, and burdens are shared. Philosopher John Rawls argued that inequalities are only acceptable if they benefit the least advantaged members of society — his famous "difference principle." In practice, distributive justice shows up in debates about progressive taxation, universal healthcare, living wages, and educational funding.

**Recognition justice** focuses on whose identities, cultures, and experiences are respected and valued. Philosopher Nancy Fraser argued that injustice is not only about material deprivation but also about cultural patterns that demean or render invisible certain groups. Misrecognition — stereotyping, cultural erasure, or institutional disrespect — is a distinct harm that cannot be solved by redistribution alone.

**Procedural justice** concerns who gets a voice in decision-making. Even well-intentioned policies can perpetuate injustice if the people most affected have no say in shaping them. Iris Marion Young emphasized that justice requires inclusive democratic processes, not just fair outcomes.

Social justice is distinct from charity. Charity addresses symptoms — feeding the hungry, sheltering the unhoused. Social justice asks why hunger and homelessness persist in wealthy societies and seeks to change the structures that produce them. Both matter, but they operate at different levels.

Understanding social justice also means grappling with the concept of **structural inequality**: the idea that disadvantage is embedded in laws, institutional practices, cultural norms, and economic systems — not merely in individual prejudice. A person can act without prejudice and still participate in systems that produce unequal outcomes. This distinction between individual attitudes and systemic patterns is central to modern social justice analysis.`,

      keyConcepts: [
        {
          term: "Distributive Justice",
          definition:
            "The fair allocation of resources, opportunities, and burdens across members of a society.",
          relatedConcepts: ["Rawls' Difference Principle", "Equity"],
        },
        {
          term: "Recognition Justice",
          definition:
            "The principle that all people's identities, cultures, and experiences deserve respect and visibility in social institutions.",
          relatedConcepts: ["Cultural Erasure", "Misrecognition"],
        },
        {
          term: "Procedural Justice",
          definition:
            "Fairness in the processes by which decisions are made, especially ensuring affected communities have a voice.",
          relatedConcepts: ["Democratic Participation", "Representation"],
        },
        {
          term: "Structural Inequality",
          definition:
            "Disadvantage embedded in laws, institutions, and cultural norms rather than arising solely from individual prejudice.",
          relatedConcepts: ["Systemic Racism", "Institutional Bias"],
        },
      ],

      explainFurther: {
        eli5: `Imagine a school where some kids always get picked first for teams, get the best seats, and get extra snacks — not because they earned it, but because of rules nobody ever voted on. Social justice is about noticing those unfair rules and changing them so every kid gets a fair shot. It's not about being nice to someone once — it's about fixing the game so it's fair for everyone.`,
        intermediate: `Social justice goes beyond individual fairness to examine how institutions — governments, schools, corporations, legal systems — systematically advantage some groups over others. It draws on three philosophical pillars: distributing resources fairly (distributive justice), respecting all identities (recognition justice), and including all voices in decision-making (procedural justice). The key insight is that injustice can be structural — built into rules and norms — even when no individual intends harm.`,
        advanced: `Contemporary social justice theory synthesizes several philosophical traditions. Rawlsian liberalism provides the distributive framework through the original position and difference principle, while communitarian critics (Walzer, MacIntyre) argue that justice must be understood within particular cultural contexts. Fraser's "bivalent" theory of justice integrates redistribution and recognition as co-fundamental, irreducible dimensions. Young's relational approach shifts the focus from distribution to the five faces of oppression: exploitation, marginalization, powerlessness, cultural imperialism, and violence. Post-structural contributions (Butler, Spivak) further complicate the picture by questioning whether identity categories themselves are stable enough to ground justice claims. The ongoing tension between universal principles and particular struggles remains a productive site of theoretical debate.`,
      },

      digDeeper: [
        {
          title: "Rawls and the Veil of Ignorance",
          content: `In *A Theory of Justice* (1971), John Rawls proposed a thought experiment: imagine you must design the rules of society from behind a "veil of ignorance" — not knowing whether you'll be rich or poor, Black or white, disabled or able-bodied. Rawls argued that rational people in this "original position" would choose two principles: (1) equal basic liberties for all, and (2) social and economic inequalities arranged so they benefit the least advantaged. This framework remains one of the most influential arguments for redistributive policies, from progressive taxation to universal education.`,
          sourceCitations: ["rawls-theory-of-justice"],
        },
        {
          title: "Fraser's Three-Dimensional Justice",
          content: `Nancy Fraser expanded the social justice framework beyond redistribution to include recognition (cultural respect) and representation (political voice). She argued that some injustices — like those faced by LGBTQ+ people or racial minorities — cannot be fully addressed by economic redistribution alone; they also require challenging cultural norms that demean or render invisible. Her "participatory parity" standard asks: can all members of society interact as peers? If not, both economic and cultural barriers must be removed.`,
          sourceCitations: ["fraser-scales-of-justice"],
        },
      ],

      quiz: [
        {
          id: "q1-1",
          question:
            "Which philosopher proposed the 'veil of ignorance' thought experiment?",
          type: "multiple_choice",
          options: [
            "Nancy Fraser",
            "John Rawls",
            "Iris Marion Young",
            "Luigi Taparelli d'Azeglio",
          ],
          correctAnswer: 1,
          explanation:
            "John Rawls introduced the veil of ignorance in A Theory of Justice (1971) as a way to derive fair principles for society by imagining people choosing rules without knowing their own position.",
          sourceCitations: ["rawls-theory-of-justice"],
        },
        {
          id: "q1-2",
          question:
            "What is the key difference between social justice and charity?",
          type: "multiple_choice",
          options: [
            "Charity is more effective than social justice",
            "Social justice addresses symptoms while charity addresses root causes",
            "Charity addresses symptoms while social justice seeks to change the structures that produce them",
            "There is no meaningful difference",
          ],
          correctAnswer: 2,
          explanation:
            "Charity addresses immediate needs (symptoms), while social justice asks why those needs persist and works to change the underlying systems and structures.",
          sourceCitations: [],
        },
        {
          id: "q1-3",
          question:
            "Structural inequality refers to disadvantage caused solely by individual prejudice.",
          type: "true_false",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation:
            "Structural inequality is embedded in laws, institutional practices, cultural norms, and economic systems — not solely in individual prejudice. A person can act without prejudice and still participate in systems that produce unequal outcomes.",
          sourceCitations: [],
        },
      ],
      connections: ["historical-movements", "economic-justice"],
    },

    // ── Section 2: Historical Movements ─────────────────────────────
    {
      id: "historical-movements",
      title: "Historical Movements for Social Justice",
      order: 2,
      summary: `Social justice has never been handed down from above — it has been fought for, organized around, and sometimes died for. Understanding where today's movements come from helps us see the patterns, strategies, and unfinished work that shape the present.

**Abolition and Reconstruction (1830s–1877).** The movement to abolish slavery in the United States was one of the earliest large-scale social justice campaigns in the modern sense. Abolitionists like Frederick Douglass and Harriet Tubman combined moral argument, direct action (the Underground Railroad), political organizing, and media (Douglass's newspaper *The North Star*). After the Civil War, the brief period of Reconstruction saw Black Americans gain citizenship, voting rights, and elected office — only to have those gains systematically dismantled by Jim Crow laws, voter suppression, and racial terror.

**The Suffrage Movement (1848–1920).** The fight for women's right to vote in the United States began formally at the Seneca Falls Convention in 1848, organized by Elizabeth Cady Stanton and Lucretia Mott. The movement took 72 years to achieve the 19th Amendment. It was marked by both bold activism and painful exclusions — many suffrage organizations sidelined or actively excluded Black women, Indigenous women, and working-class women. Figures like Sojourner Truth, Ida B. Wells, and later Fannie Lou Hamer fought on multiple fronts simultaneously.

**The Labor Movement (1880s–1940s).** Industrial workers organized for the eight-hour day, safe working conditions, an end to child labor, and the right to collectively bargain. Key moments include the Triangle Shirtwaist Factory fire (1911), which killed 146 garment workers and galvanized support for workplace safety laws, and the rise of unions like the Congress of Industrial Organizations (CIO). The labor movement's gains — weekends, overtime pay, workplace safety standards — are so woven into daily life that they're often invisible today.

**The Civil Rights Movement (1954–1968).** The modern Civil Rights Movement combined legal strategy (Brown v. Board of Education, 1954), nonviolent direct action (Montgomery Bus Boycott, sit-ins, Freedom Rides), grassroots organizing (the Student Nonviolent Coordinating Committee), and mass mobilization (the March on Washington, 1963). Its achievements — the Civil Rights Act (1964), the Voting Rights Act (1965) — were landmark but incomplete. Martin Luther King Jr. spent his final years increasingly focused on economic justice and opposing the Vietnam War, arguing that racial justice could not be separated from economic and foreign policy.

**Global Anti-Colonial Movements (1940s–1970s).** Across Africa, Asia, and the Caribbean, movements for independence from European colonial powers drew on social justice frameworks — self-determination, racial equality, economic sovereignty. Figures like Mahatma Gandhi, Kwame Nkrumah, Frantz Fanon, and Nelson Mandela connected the liberation of colonized peoples to broader questions of justice. Fanon's *The Wretched of the Earth* (1961) argued that colonialism was not just political domination but a total system of economic extraction and psychological violence.

**Contemporary Movements (2010s–present).** The Black Lives Matter movement, founded in 2013 by Alicia Garza, Patrisse Cullors, and Opal Tometi after the acquittal of Trayvon Martin's killer, brought systemic racism in policing to global attention. The #MeToo movement, catalyzed by Tarana Burke's grassroots work and amplified by revelations about Harvey Weinstein in 2017, exposed the pervasiveness of sexual harassment and assault across industries. Climate justice movements, indigenous rights campaigns like Standing Rock, and disability justice organizing all demonstrate that social justice work continues to evolve, intersect, and expand.`,

      keyConcepts: [
        {
          term: "Abolition",
          definition:
            "The movement to end slavery; in modern usage, also refers to efforts to dismantle the prison-industrial complex.",
          relatedConcepts: ["Reconstruction", "Jim Crow"],
        },
        {
          term: "Suffrage",
          definition:
            "The right to vote, and the movements that fought to extend it to women and other excluded groups.",
          relatedConcepts: ["Seneca Falls", "19th Amendment"],
        },
        {
          term: "Nonviolent Direct Action",
          definition:
            "A strategy of protest that uses boycotts, sit-ins, marches, and civil disobedience to confront injustice without physical violence.",
          relatedConcepts: [
            "Civil Rights Movement",
            "Gandhi",
            "Martin Luther King Jr.",
          ],
        },
        {
          term: "Anti-Colonialism",
          definition:
            "Movements opposing European colonial rule and asserting the right of colonized peoples to self-determination.",
          relatedConcepts: ["Self-Determination", "Decolonization", "Fanon"],
        },
      ],

      explainFurther: {
        eli5: `Throughout history, when things were unfair, people got together and said "this has to change." Sometimes they marched, sometimes they refused to follow unjust rules, sometimes they wrote and spoke until enough people listened. Enslaved people fought for freedom. Women fought for the right to vote. Workers fought for safe jobs. Each group learned from the ones before them, and the work keeps going today.`,
        intermediate: `Social justice movements follow recurring patterns: grassroots organizing builds a base, moral arguments shift public opinion, direct action creates urgency, and legal/political change codifies gains. But each movement also reveals tensions — between moderate and radical approaches, between single-issue focus and intersectional analysis, and between legal victories and the slower work of cultural transformation. Progress is neither linear nor guaranteed; many gains have been rolled back.`,
        advanced: `Historiographical debates about social justice movements center on agency, periodization, and interpretation. The "long civil rights movement" thesis (Hall, 2005) argues that the standard 1954–1968 framing obscures both earlier radicalism and later continuations. Cedric Robinson's concept of the "Black radical tradition" reframes resistance to racial capitalism as a centuries-long continuum rather than discrete movements. Transnational perspectives (Kelley, Prashad) connect U.S. movements to global anti-colonial and Third World solidarity networks. The question of whether movements achieve "structural" versus "symbolic" change (Piven & Cloward's thesis that disruption is more effective than organization) remains fiercely debated.`,
      },

      digDeeper: [
        {
          title: "The Unfinished Business of Reconstruction",
          content: `The period after the Civil War (1865–1877) saw transformative possibilities: the 13th, 14th, and 15th Amendments; Black elected officials throughout the South; public schools open to all races. But Reconstruction was violently dismantled. White supremacist terrorism (the Ku Klux Klan), the withdrawal of federal troops, and the Supreme Court's gutting of civil rights protections led to nearly a century of Jim Crow segregation. W.E.B. Du Bois's *Black Reconstruction in America* (1935) argued that Reconstruction's failure was not due to Black incapacity — as the prevailing racist historiography claimed — but to the deliberate sabotage of a democratic experiment by elites who preferred racial hierarchy to multiracial democracy.`,
          sourceCitations: ["dubois-black-reconstruction"],
        },
        {
          title: "The Triangle Fire and the Birth of Workplace Safety",
          content: `On March 25, 1911, a fire broke out at the Triangle Shirtwaist Factory in New York City. The owners had locked the exit doors to prevent unauthorized breaks. 146 workers — mostly young immigrant women — died. The public outrage that followed drove landmark workplace safety legislation and strengthened the labor movement. The fire remains a powerful example of how structural injustice (poverty wages, no safety regulations, no enforcement) produces catastrophic harm, and how tragedy can catalyze structural change.`,
          sourceCitations: ["von-drehle-triangle"],
        },
      ],

      quiz: [
        {
          id: "q2-1",
          question:
            "How long did the women's suffrage movement in the US take from Seneca Falls to the 19th Amendment?",
          type: "multiple_choice",
          options: ["32 years", "52 years", "72 years", "92 years"],
          correctAnswer: 2,
          explanation:
            "The Seneca Falls Convention was held in 1848 and the 19th Amendment was ratified in 1920 — a span of 72 years.",
          sourceCitations: [],
        },
        {
          id: "q2-2",
          question:
            "The Black Lives Matter movement was founded in 2020 during the George Floyd protests.",
          type: "true_false",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation:
            "Black Lives Matter was founded in 2013 by Alicia Garza, Patrisse Cullors, and Opal Tometi after the acquittal of George Zimmerman in the killing of Trayvon Martin. It gained wider attention in 2014 and 2020, but the founding predates those moments.",
          sourceCitations: [],
        },
        {
          id: "q2-3",
          question:
            "Which event killed 146 garment workers and galvanized workplace safety reform?",
          type: "multiple_choice",
          options: [
            "The Haymarket Affair",
            "The Pullman Strike",
            "The Triangle Shirtwaist Factory fire",
            "The Homestead Strike",
          ],
          correctAnswer: 2,
          explanation:
            "The Triangle Shirtwaist Factory fire of 1911 killed 146 workers, mostly young immigrant women, and led to landmark workplace safety legislation.",
          sourceCitations: ["von-drehle-triangle"],
        },
      ],
      connections: ["what-is-social-justice", "economic-justice", "criminal-justice"],
    },

    // ── Section 3: Economic Justice ─────────────────────────────────
    {
      id: "economic-justice",
      title: "Economic Justice: Wealth, Poverty, and Systemic Inequality",
      order: 3,
      summary: `Economic justice is the principle that all people should have what they need to live with dignity, and that economic systems should not concentrate advantages in the hands of a few while imposing deprivation on many. It sits at the intersection of distributive justice and structural analysis: examining not just who has what, but how the rules of the economy produce and reproduce inequality.

**The Scale of Inequality.** In the United States, the wealthiest 1% of households hold more wealth than the bottom 90% combined. Globally, the 26 richest individuals own as much as the poorest 3.8 billion people. These disparities are not natural or inevitable — they are produced by specific policy choices: tax structures, labor laws, trade agreements, housing policy, and the rules governing finance and corporate governance.

**The Racial Wealth Gap.** Economic inequality in the U.S. is deeply racialized. The median white family holds roughly eight times the wealth of the median Black family and five times that of the median Latino family. This gap is not explained by differences in individual effort or education. It traces directly to historical policies: slavery (which built wealth for white enslavers while denying it to enslaved people), Jim Crow (which excluded Black Americans from the New Deal's wealth-building programs), redlining (which denied mortgages and homeownership to Black families), and mass incarceration (which extracts wealth from communities of color). Each generation's disadvantage compounds into the next.

**Poverty Is Structural.** The dominant cultural narrative holds that poverty results from individual failures — lack of work ethic, poor decisions, insufficient education. Sociological research consistently shows otherwise. Poverty is produced by low wages, lack of affordable housing, inadequate public transit, the cost of healthcare, and the absence of a social safety net that exists in nearly every other wealthy nation. Matthew Desmond's research on eviction shows how a single crisis — a medical bill, a car breakdown, a lost job — can trigger a cascade that pushes a working family into homelessness, not through any moral failing but through the absence of structural support.

**Work and Wages.** The federal minimum wage in the U.S. has been $7.25/hour since 2009. Adjusted for inflation and productivity growth, it would be over $24/hour if it had kept pace with the economy since 1968. The gap between worker productivity and worker compensation has widened dramatically since the late 1970s — productivity has risen roughly 60% while wages have grown only about 16%. The difference has flowed to corporate profits and executive compensation. A CEO at a major U.S. firm now earns roughly 350 times the median worker's pay, up from about 20 times in the 1960s.

**Housing as a Justice Issue.** For most American families, a home is their largest asset and primary vehicle for building wealth. Federal policies — from the Homestead Act to the GI Bill to the mortgage interest deduction — have subsidized homeownership, but these benefits have been distributed unequally. Redlining, racially restrictive covenants, and discriminatory lending practices systematically excluded Black, Latino, and Indigenous families. Today, the affordable housing crisis affects people across racial lines, but its roots in racialized policy remain visible in persistent segregation patterns and wealth gaps.

**Global Dimensions.** Economic justice is not only a domestic issue. Global supply chains depend on low-wage labor in the Global South, often under conditions that would be illegal in wealthy nations. The rules of international trade and finance — set largely by wealthy nations and institutions like the World Bank and IMF — have been criticized for perpetuating economic dependency. Climate change adds another layer: the nations least responsible for carbon emissions are often the most vulnerable to its effects.`,

      keyConcepts: [
        {
          term: "Racial Wealth Gap",
          definition:
            "The persistent disparity in household wealth between white families and families of color, rooted in historical policies of exclusion and extraction.",
          relatedConcepts: ["Redlining", "Structural Racism"],
        },
        {
          term: "Structural Poverty",
          definition:
            "Poverty understood as the product of systemic conditions — low wages, lack of housing, inadequate safety nets — rather than individual moral failing.",
          relatedConcepts: ["Eviction", "Living Wage"],
        },
        {
          term: "Wage-Productivity Gap",
          definition:
            "The growing divergence since the 1970s between how much workers produce and how much they are paid.",
          relatedConcepts: ["Minimum Wage", "CEO Pay Ratio"],
        },
        {
          term: "Redlining",
          definition:
            "The practice of denying mortgages and insurance to residents of neighborhoods deemed 'hazardous' — almost always communities of color — by the federal Home Owners' Loan Corporation beginning in the 1930s.",
          relatedConcepts: [
            "Housing Discrimination",
            "Racial Wealth Gap",
            "Segregation",
          ],
        },
      ],

      explainFurther: {
        eli5: `Imagine a board game where some players start with way more money and get to make the rules. Every time around the board, they get richer, and the other players fall further behind — not because they're bad at the game, but because the rules were written to help the people who were already winning. Economic justice is about changing those rules so everyone has a real chance.`,
        intermediate: `Economic inequality isn't random — it's produced by policy choices about taxation, wages, housing, education, and social safety nets. In the U.S., these policies have been shaped by racial hierarchy: slavery, Jim Crow, redlining, and mass incarceration systematically extracted wealth from Black communities while subsidizing white wealth-building. Today's racial wealth gap is a direct inheritance of those policies. Addressing economic justice requires changing structures, not just urging individuals to work harder within a tilted system.`,
        advanced: `Economic justice theory draws on multiple traditions. Marxist analysis emphasizes the extraction of surplus value from labor by capital and the structural tendency of capitalism toward concentration. Amartya Sen's capabilities approach reframes poverty not as income deficiency but as deprivation of real freedoms — the capability to be nourished, housed, educated, and politically active. Piketty's empirical work demonstrates that when the rate of return on capital exceeds economic growth (r > g), wealth concentration accelerates without intervention. Racial capitalism theory (Robinson, Kelley) argues that capitalism has always depended on racial hierarchy for its functioning — that racism is not an aberration in an otherwise fair system but a constitutive feature. Reparations discourse (Coates, Darity & Mullen) engages directly with whether and how historical extraction can be materially redressed.`,
      },

      digDeeper: [
        {
          title: "Redlining: How the Government Segregated America",
          content: `In the 1930s, the federal Home Owners' Loan Corporation (HOLC) created color-coded maps of American cities, grading neighborhoods from A ("best") to D ("hazardous"). Neighborhoods with Black, immigrant, or Jewish residents were almost universally graded D — outlined in red, hence "redlining." These maps determined who could get a federally backed mortgage. White families in green-lined suburbs built wealth through homeownership subsidized by government policy. Black families in redlined neighborhoods were denied the same opportunity. The effects persist: a 2018 study found that 74% of neighborhoods redlined in the 1930s are still low-to-moderate income today, and 64% are still majority-minority.`,
          sourceCitations: ["rothstein-color-of-law"],
        },
        {
          title: "Eviction and the Poverty Trap",
          content: `Matthew Desmond's Pulitzer Prize-winning *Evicted* (2016) documents how eviction is not just a consequence of poverty but a cause of it. An eviction record makes it harder to find future housing, get a job, or access public assistance. Desmond found that in Milwaukee, one in eight renters experienced a forced move in a two-year period. Women of color were disproportionately affected. The book makes the case that stable, affordable housing is not a luxury but a precondition for escaping poverty.`,
          sourceCitations: ["desmond-evicted"],
        },
      ],

      quiz: [
        {
          id: "q3-1",
          question:
            "Approximately how much more wealth does the median white family hold compared to the median Black family in the U.S.?",
          type: "multiple_choice",
          options: ["2 times", "4 times", "8 times", "15 times"],
          correctAnswer: 2,
          explanation:
            "The median white family holds roughly eight times the wealth of the median Black family — a gap rooted in centuries of policy-driven exclusion and extraction.",
          sourceCitations: [],
        },
        {
          id: "q3-2",
          question:
            "If the minimum wage had kept pace with productivity growth since 1968, it would be approximately:",
          type: "multiple_choice",
          options: ["$12/hour", "$16/hour", "$20/hour", "Over $24/hour"],
          correctAnswer: 3,
          explanation:
            "Adjusted for productivity growth since 1968, the minimum wage would be over $24/hour — compared to the actual federal minimum of $7.25, unchanged since 2009.",
          sourceCitations: [],
        },
        {
          id: "q3-3",
          question:
            "Redlining refers to the practice of drawing red lines around neighborhoods to indicate where new roads should be built.",
          type: "true_false",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation:
            "Redlining refers to the federal practice of color-coding neighborhoods and denying mortgages to those graded 'hazardous' — almost always communities of color. It had nothing to do with road construction.",
          sourceCitations: ["rothstein-color-of-law"],
        },
      ],
      connections: [
        "what-is-social-justice",
        "criminal-justice",
        "environmental-justice",
      ],
    },

    // ── Section 4: Criminal Justice and Mass Incarceration ──────────
    {
      id: "criminal-justice",
      title: "Criminal Justice Reform and Mass Incarceration",
      order: 4,
      summary: `The United States incarcerates more people than any other nation on Earth — both in absolute numbers and per capita. With roughly 1.9 million people behind bars and another 3.7 million on probation or parole, the scale of the U.S. carceral system is historically unprecedented. Understanding how this happened, whom it affects, and what alternatives exist is central to any social justice analysis.

**How We Got Here.** Mass incarceration did not emerge from rising crime rates. Crime rates in the U.S. peaked in the early 1990s and have fallen dramatically since, yet incarceration continued to rise. The expansion was driven by policy choices: the War on Drugs (launched by Nixon in 1971, escalated by Reagan in the 1980s), mandatory minimum sentencing, three-strikes laws, the elimination of parole in many states, and the dramatic expansion of what counts as a criminal offense. Michelle Alexander's *The New Jim Crow* (2010) argues that mass incarceration functions as a system of racial control — a successor to slavery and Jim Crow that targets Black and brown communities through formally race-neutral laws enforced in deeply racialized ways.

**Racial Disparities.** Black Americans are incarcerated at roughly five times the rate of white Americans. Latino Americans are incarcerated at about 1.3 times the rate. These disparities exist at every stage of the system: policing (who gets stopped, searched, and arrested), prosecution (who gets charged with what), sentencing (who gets prison versus probation), and parole (who gets released and when). Studies consistently show that these disparities are not explained by differences in criminal behavior but by differences in how the system treats people based on race.

**The War on Drugs.** Drug use occurs at similar rates across racial groups, yet Black Americans are nearly four times more likely to be arrested for marijuana possession than white Americans. The crack/powder cocaine sentencing disparity — where crack (more common in Black communities) carried penalties 100 times harsher than powder cocaine (more common in white communities) until the Fair Sentencing Act of 2010 reduced the ratio to 18:1 — is one of the clearest examples of racialized drug policy. The War on Drugs has devastated Black and Latino communities, not by reducing drug use (which it has not) but by funneling millions into the carceral system.

**Beyond Prison Walls.** The consequences of incarceration extend far beyond the prison term. A criminal record can bar someone from employment, housing, public assistance, voting (in many states), student loans, and professional licenses. These "collateral consequences" make reentry into society enormously difficult and perpetuate cycles of poverty and incarceration. Children of incarcerated parents face increased risks of poverty, housing instability, and their own involvement in the criminal legal system. An estimated 2.7 million children in the U.S. have a parent behind bars.

**Alternatives and Reform.** Reform efforts include: ending cash bail (which keeps people in jail solely because they cannot afford to pay), diverting people with mental illness and substance use disorders to treatment rather than incarceration, investing in community-based violence intervention programs, restorative justice practices that center the needs of victims and communities rather than punishment alone, and reexamining the entire premise that caging people makes communities safer. Some abolitionists argue that the system is not broken but working as designed — to control marginalized populations — and that genuine safety requires investment in housing, healthcare, education, and economic opportunity rather than policing and prisons.

**Policing.** The police killings of Michael Brown (2014), Eric Garner (2014), Tamir Rice (2014), Breonna Taylor (2020), George Floyd (2020), and many others brought national attention to the use of lethal force by police, particularly against Black people. Research shows that Black people are roughly three times more likely to be killed by police than white people. Reform proposals range from body cameras and use-of-force policies to more structural changes: redirecting police budgets to social services, removing police from schools, ending qualified immunity, and, in some frameworks, reimagining public safety entirely.`,

      keyConcepts: [
        {
          term: "Mass Incarceration",
          definition:
            "The historically unprecedented expansion of imprisonment in the United States since the 1970s, driven by policy choices rather than crime rates.",
          relatedConcepts: ["War on Drugs", "Mandatory Minimums"],
        },
        {
          term: "The New Jim Crow",
          definition:
            "Michelle Alexander's thesis that mass incarceration functions as a system of racial control analogous to Jim Crow segregation, using formally race-neutral laws enforced in racially biased ways.",
          relatedConcepts: [
            "Racial Disparities",
            "War on Drugs",
            "Structural Racism",
          ],
        },
        {
          term: "Collateral Consequences",
          definition:
            "The legal and social penalties that follow a criminal conviction beyond the sentence itself — including barriers to employment, housing, voting, and public assistance.",
          relatedConcepts: ["Reentry", "Disenfranchisement"],
        },
        {
          term: "Restorative Justice",
          definition:
            "An approach to justice that focuses on repairing harm through inclusive processes involving victims, offenders, and communities, rather than punishment alone.",
          relatedConcepts: ["Abolition", "Community Safety"],
        },
      ],

      explainFurther: {
        eli5: `The U.S. puts more people in jail than any other country. A lot of those people are there because of rules that treat some communities — especially Black and brown communities — much more harshly than others. When someone gets out of prison, they can't get jobs or homes easily, which makes it hard to stay out. Some people think we need to fix the system; others think we need to replace it with something completely different that actually helps people.`,
        intermediate: `Mass incarceration in the U.S. is not a response to crime — crime has fallen since the 1990s while incarceration rose. It was built through specific policy choices: the War on Drugs, mandatory minimums, and three-strikes laws. The system falls disproportionately on Black and Latino communities at every stage, from policing to sentencing. The consequences extend beyond prison: criminal records create barriers to housing, employment, and voting that perpetuate cycles of poverty. Reform efforts range from ending cash bail to rethinking whether incarceration makes communities safer at all.`,
        advanced: `Critical carceral studies situates mass incarceration within longer histories of racial capitalism and social control. Alexander's "New Jim Crow" thesis builds on earlier work by Wacquant, who theorized the ghetto-prison continuum. Ruth Wilson Gilmore's *Golden Gulag* analyzes the political economy of prison expansion in California, arguing that prisons emerged as a "fix" for surplus land, labor, capital, and state capacity. Abolition theory (Davis, Gilmore, Kaba) distinguishes between reformist reforms (which strengthen the carceral system's legitimacy while tweaking its edges) and non-reformist reforms (which shrink the system's reach and build alternative infrastructure). The tension between reform and abolition remains one of the most generative debates in contemporary social justice organizing.`,
      },

      digDeeper: [
        {
          title: "The School-to-Prison Pipeline",
          content: `The term "school-to-prison pipeline" describes the pattern by which harsh school disciplinary policies — zero tolerance rules, suspensions, expulsions, and the presence of police (School Resource Officers) in schools — funnel students, disproportionately Black and disabled students, out of the education system and into the criminal legal system. A Black student is nearly four times more likely to be suspended than a white student. Suspended students are more likely to drop out; dropouts are more likely to be incarcerated. The pipeline illustrates how systems (education, policing, criminal justice) interlock to produce racialized outcomes.`,
          sourceCitations: ["advancement-project-pipeline"],
        },
        {
          title: "What Does Abolition Actually Mean?",
          content: `Prison abolition is often misunderstood as simply "close all prisons tomorrow." In practice, abolitionists like Mariame Kaba argue for a long-term horizon: building the community infrastructure — housing, healthcare, education, conflict resolution — that makes caging people unnecessary. The question is not "what do we do with dangerous people without prisons?" but "what kind of society produces so much harm that it feels it needs to cage 1.9 million of its people?" Abolition reframes the question from "how do we fix prisons?" to "how do we build genuine safety?"`,
          sourceCitations: ["kaba-we-do-this"],
        },
      ],

      quiz: [
        {
          id: "q4-1",
          question:
            "Mass incarceration in the U.S. was primarily driven by:",
          type: "multiple_choice",
          options: [
            "Rising crime rates",
            "Policy choices like the War on Drugs and mandatory minimums",
            "Increased immigration",
            "Higher poverty rates",
          ],
          correctAnswer: 1,
          explanation:
            "Crime rates peaked in the early 1990s and have fallen since, yet incarceration continued to rise. The expansion was driven by policy: the War on Drugs, mandatory minimums, three-strikes laws, and expanded definitions of criminal offenses.",
          sourceCitations: ["alexander-new-jim-crow"],
        },
        {
          id: "q4-2",
          question:
            "Black Americans are incarcerated at roughly how many times the rate of white Americans?",
          type: "multiple_choice",
          options: [
            "2 times",
            "3 times",
            "5 times",
            "10 times",
          ],
          correctAnswer: 2,
          explanation:
            "Black Americans are incarcerated at roughly five times the rate of white Americans — a disparity that exists at every stage of the system.",
          sourceCitations: [],
        },
        {
          id: "q4-3",
          question:
            "'Collateral consequences' refers to the physical conditions inside prisons.",
          type: "true_false",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation:
            "Collateral consequences are the barriers that follow a conviction beyond the sentence itself: difficulty finding employment, housing, voting rights, public assistance, and more.",
          sourceCitations: [],
        },
      ],
      connections: [
        "historical-movements",
        "economic-justice",
        "taking-action",
      ],
    },

    // ── Section 5: Environmental Justice ────────────────────────────
    {
      id: "environmental-justice",
      title: "Environmental Justice: Who Bears the Burden?",
      order: 5,
      summary: `Environmental justice is the principle that no community should bear a disproportionate share of environmental harms — pollution, toxic waste, climate impacts — because of race, income, or political power. It connects ecological concerns to the core social justice questions of who benefits, who suffers, and who decides.

**The Birth of Environmental Justice.** The modern environmental justice movement is often traced to Warren County, North Carolina, in 1982, where the state attempted to site a hazardous waste landfill in a predominantly Black, low-income community. Residents and civil rights leaders organized weeks of protests — the first major instance of a civil rights-style direct action campaign focused on environmental harm. A landmark 1987 study by the United Church of Christ found that race was the single strongest predictor of where hazardous waste facilities were located — stronger even than income. Communities of color were systematically selected as dumping grounds.

**Pollution and Race.** The pattern identified in 1987 has been confirmed repeatedly. Black Americans are exposed to 56% more particulate matter pollution than is caused by their consumption. Latino communities face similar disparities. Indigenous communities have been disproportionately affected by uranium mining, nuclear testing, and oil pipeline construction. The Flint, Michigan water crisis (2014–2019) — in which a predominantly Black city was switched to a corrosive water source, exposing residents to dangerous lead levels while officials dismissed their complaints — became a national symbol of environmental racism.

**Cancer Alley.** The 85-mile stretch of the Mississippi River between Baton Rouge and New Orleans, Louisiana, is known as "Cancer Alley" due to the concentration of over 150 petrochemical plants and refineries. The communities that live among these facilities are overwhelmingly Black, descended from people who were enslaved on the same land where the plantations have been replaced by chemical plants. Cancer rates, respiratory illness, and other health impacts in these communities far exceed national averages. Residents have organized for decades, but face powerful corporate and political opposition.

**Climate Justice.** Climate change is not an equal-opportunity crisis. The nations and communities least responsible for greenhouse gas emissions are often the most vulnerable to its effects: rising seas, extreme heat, crop failure, and intensifying storms. Within wealthy nations, the pattern repeats: low-income communities and communities of color are more likely to live in flood zones, heat islands (areas with less tree cover and more pavement), and areas with inadequate infrastructure. They have fewer resources to recover from climate disasters. Climate justice demands that the costs and responsibilities of addressing climate change be distributed according to who caused the problem and who can most afford to act.

**Indigenous Environmental Sovereignty.** Indigenous peoples have been on the front lines of environmental protection long before the modern environmental movement. From the resistance to the Dakota Access Pipeline at Standing Rock (2016) to ongoing struggles over water rights, mining on sacred lands, and deforestation in the Amazon, Indigenous communities fight to protect not only their land but their cultural survival. Indigenous environmental philosophy — which often understands humans as part of, not separate from, the natural world — offers frameworks for sustainability that mainstream environmentalism is increasingly learning from.

**Environmental Justice as Intersectional.** Environmental justice makes visible what is often invisible: that environmental harm is not randomly distributed. It follows the fault lines of race, class, and political power. It intersects with health justice (pollution causes asthma, cancer, developmental harm), economic justice (environmental cleanup costs fall on communities that can least afford them), and procedural justice (affected communities are rarely consulted when facilities are sited). The principle is simple: clean air, clean water, and a livable climate are not privileges — they are rights.`,

      keyConcepts: [
        {
          term: "Environmental Racism",
          definition:
            "The disproportionate siting of polluting facilities, toxic waste, and environmental hazards in communities of color.",
          relatedConcepts: [
            "Warren County",
            "Cancer Alley",
            "Flint Water Crisis",
          ],
        },
        {
          term: "Climate Justice",
          definition:
            "The principle that the costs and responsibilities of addressing climate change should be distributed according to who caused the problem and who is most affected.",
          relatedConcepts: [
            "Global South",
            "Heat Islands",
            "Environmental Sovereignty",
          ],
        },
        {
          term: "Cancer Alley",
          definition:
            "The 85-mile stretch along the Mississippi River in Louisiana with over 150 petrochemical facilities, located predominantly in Black communities with elevated cancer and illness rates.",
          relatedConcepts: ["Environmental Racism", "Petrochemical Industry"],
        },
        {
          term: "Environmental Sovereignty",
          definition:
            "The right of Indigenous and local communities to control decisions about the use and protection of their land and natural resources.",
          relatedConcepts: ["Standing Rock", "Indigenous Rights"],
        },
      ],

      explainFurther: {
        eli5: `Imagine factories that make the air and water dirty. Those factories don't get built in neighborhoods where rich, powerful people live — they get built where people who don't have as much power live, especially Black and brown neighborhoods. Environmental justice means everyone deserves clean air and water, no matter who they are or where they live.`,
        intermediate: `Environmental justice reveals that environmental harm is not randomly distributed — it follows the lines of race and class. Communities of color are more likely to live near polluting facilities, breathe dirtier air, and drink contaminated water. This isn't coincidence; it's the result of zoning decisions, political power dynamics, and the deliberate siting of hazards in communities with less ability to resist. Climate change amplifies these patterns globally. Environmental justice connects ecological concerns to the broader social justice framework of who benefits, who suffers, and who decides.`,
        advanced: `Environmental justice scholarship emerged from the convergence of civil rights activism and environmental science. Robert Bullard's foundational work in Houston (1979) demonstrated the non-random distribution of waste sites in Black neighborhoods. Pulido's concept of "environmental racism" distinguishes between intentional discrimination and the structural processes (racialized capitalism, suburbanization, industrial zoning) that produce unequal exposure. Sze and London frame EJ as a "boundary object" bridging community organizing, public health, and regulatory science. The global dimension draws on Guha and Martinez-Alier's "environmentalism of the poor," which challenges Northern-centric conservation models. Current debates center on "just transition" frameworks — how to shift away from fossil fuels without abandoning workers and communities economically dependent on extractive industries.`,
      },

      digDeeper: [
        {
          title: "The Flint Water Crisis",
          content: `In April 2014, the city of Flint, Michigan — under state-appointed emergency management that had overridden local democratic governance — switched its water source from the Detroit system to the Flint River without adequate corrosion control. The river water corroded lead pipes, contaminating drinking water for nearly 100,000 residents, most of them Black and low-income. Residents reported discolored water, rashes, and illness, but were told by state officials that the water was safe. Pediatrician Dr. Mona Hanna-Attisha's research documenting elevated blood lead levels in children helped force acknowledgment of the crisis. The episode illustrates multiple dimensions of injustice: environmental racism (it's difficult to imagine this happening in a wealthy white suburb), procedural injustice (democratic governance had been suspended), and the deadly consequences of dismissing community knowledge.`,
          sourceCitations: ["hanna-attisha-flint"],
        },
        {
          title: "Standing Rock and Indigenous Resistance",
          content: `In 2016, the Standing Rock Sioux Tribe and thousands of allies ("water protectors") gathered in North Dakota to oppose the Dakota Access Pipeline, which was routed under Lake Oahe near the Standing Rock reservation — threatening the tribe's water supply and crossing sacred burial sites. The pipeline had originally been routed near Bismarck, a predominantly white city, but was moved to its final location after concerns about the water supply there. The protest became one of the largest gatherings of Indigenous peoples in modern U.S. history and drew global attention to Indigenous environmental sovereignty. Despite mass mobilization, the pipeline was ultimately completed, but Standing Rock galvanized a generation of Indigenous and climate activism.`,
          sourceCitations: ["estes-our-history-is-future"],
        },
      ],

      quiz: [
        {
          id: "q5-1",
          question:
            "The modern environmental justice movement is often traced to events in:",
          type: "multiple_choice",
          options: [
            "Love Canal, New York (1978)",
            "Warren County, North Carolina (1982)",
            "Flint, Michigan (2014)",
            "Standing Rock, North Dakota (2016)",
          ],
          correctAnswer: 1,
          explanation:
            "While Love Canal raised environmental awareness generally, Warren County (1982) is considered the birth of the environmental justice movement specifically — the first major civil rights-style campaign focused on the intersection of race and environmental harm.",
          sourceCitations: [],
        },
        {
          id: "q5-2",
          question:
            "According to a 1987 UCC study, what was the strongest predictor of where hazardous waste facilities were located?",
          type: "multiple_choice",
          options: [
            "Income level",
            "Population density",
            "Race",
            "Proximity to highways",
          ],
          correctAnswer: 2,
          explanation:
            "The United Church of Christ's 1987 study found that race was the single strongest predictor of hazardous waste facility siting — stronger even than income.",
          sourceCitations: [],
        },
        {
          id: "q5-3",
          question:
            "The Dakota Access Pipeline was originally routed near a predominantly Black community before being moved to Standing Rock.",
          type: "true_false",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation:
            "The pipeline was originally routed near Bismarck, a predominantly white city, and was moved to its current route near the Standing Rock reservation after concerns about Bismarck's water supply.",
          sourceCitations: ["estes-our-history-is-future"],
        },
      ],
      connections: [
        "economic-justice",
        "intersectionality",
        "taking-action",
      ],
    },

    // ── Section 6: Intersectionality ────────────────────────────────
    {
      id: "intersectionality",
      title: "Intersectionality: How Systems of Oppression Overlap",
      order: 6,
      summary: `Intersectionality is a framework for understanding how different forms of inequality — racism, sexism, classism, homophobia, ableism, and others — do not operate independently but interlock, creating experiences that cannot be understood by looking at any single axis alone.

**Origin of the Term.** Legal scholar Kimberle Crenshaw coined the term "intersectionality" in 1989 to address a specific legal problem: courts were failing Black women plaintiffs in discrimination cases. In *DeGraffenreid v. General Motors* (1976), Black women sued GM for discrimination. The court rejected their claim, reasoning that GM hired Black people (men, for factory jobs) and women (white women, for secretarial jobs), so there was no race or sex discrimination. The court could not see that Black women faced a compound discrimination that neither "race" nor "sex" alone captured. Crenshaw's framework named what Black feminists — the Combahee River Collective, Audre Lorde, bell hooks, Patricia Hill Collins — had been articulating for decades.

**Beyond Addition.** Intersectionality is not simply "adding up" oppressions (race + gender + class = triple oppression). It's about qualitatively different experiences that emerge at intersections. A wealthy Black man, a poor white woman, and a poor Black woman do not experience racism, sexism, or classism in interchangeable ways. The specific combination shapes their encounters with institutions, their access to resources, and the forms of solidarity available to them.

**How It Works in Practice.** Consider healthcare. Research shows that Black women are three to four times more likely to die from pregnancy-related complications than white women. This disparity holds across income and education levels — a college-educated Black woman has worse maternal health outcomes than a white woman without a high school diploma. The causes are intersectional: medical racism (Black patients' pain being systematically underestimated), the chronic stress of navigating racism ("weathering"), and healthcare systems designed around white norms. Neither a "race-only" nor a "gender-only" analysis captures the full picture.

**Disability Justice.** The disability justice framework, articulated by Sins Invalid and other organizations led by disabled people of color and queer disabled people, is a direct application of intersectional thinking. It recognizes that disability is experienced differently depending on race, class, gender, and sexuality. A white wheelchair user in a wealthy suburb navigates a different world than a Black Deaf person in a low-income neighborhood. Disability justice moves beyond seeking accommodations within existing systems to questioning whose bodies and minds are considered "normal" and how that norm produces exclusion.

**LGBTQ+ Justice Through an Intersectional Lens.** The experience of LGBTQ+ people is shaped by race, class, disability, immigration status, and more. Transgender women of color face rates of violence far exceeding those faced by white cisgender gay men. Homeless LGBTQ+ youth — disproportionately youth of color rejected by families — face compounded vulnerabilities. The mainstream LGBTQ+ rights movement's focus on marriage equality, while important, was criticized for centering the priorities of relatively privileged white gay and lesbian people while issues like homelessness, incarceration, and immigration enforcement affecting queer people of color received less attention.

**Critiques and Misuses.** Intersectionality has been both widely adopted and widely misunderstood. Common misuses include: treating it as an identity checklist (more marginalized identities = more authority), using it to rank oppressions, or emptying it of its structural analysis and reducing it to individual identity performance. Crenshaw and other scholars emphasize that intersectionality is an analytical tool for understanding how *systems* produce compounded disadvantage — not a framework for personal identity politics divorced from structural critique.`,

      keyConcepts: [
        {
          term: "Intersectionality",
          definition:
            "A framework, coined by Kimberle Crenshaw, for understanding how overlapping systems of oppression (racism, sexism, classism, etc.) create compounded experiences of disadvantage that cannot be understood through any single axis.",
          relatedConcepts: [
            "Compound Discrimination",
            "Black Feminism",
            "Structural Analysis",
          ],
        },
        {
          term: "Disability Justice",
          definition:
            "A framework led by disabled people of color that applies intersectional analysis to disability, questioning which bodies/minds are considered 'normal' and how that norm produces exclusion.",
          relatedConcepts: ["Ableism", "Accessibility", "Sins Invalid"],
        },
        {
          term: "Weathering",
          definition:
            "The hypothesis that chronic exposure to racism and discrimination causes accelerated biological aging and health deterioration, particularly in Black Americans.",
          relatedConcepts: [
            "Health Disparities",
            "Maternal Mortality",
            "Allostatic Load",
          ],
        },
        {
          term: "Compound Discrimination",
          definition:
            "Discrimination that occurs at the intersection of multiple identities (e.g., race and gender) and cannot be captured by examining either axis alone.",
          relatedConcepts: [
            "DeGraffenreid v. GM",
            "Intersectionality",
          ],
        },
      ],

      explainFurther: {
        eli5: `Imagine you're carrying a heavy backpack. Now imagine some people have to carry two or three backpacks at the same time — one for being a girl, one for being Black, one for being poor. Intersectionality says we can't just look at one backpack at a time — we need to see how carrying all of them together makes things harder in ways that are different from carrying just one.`,
        intermediate: `Intersectionality recognizes that systems of oppression don't operate in isolation. A Black woman doesn't experience racism and sexism separately — she experiences a specific, compounded form of discrimination that is qualitatively different from what a Black man or a white woman faces. This framework, coined by Kimberle Crenshaw, is not about ranking oppressions but about analyzing how systems interlock to produce specific patterns of advantage and disadvantage. It applies across domains: healthcare, criminal justice, employment, housing.`,
        advanced: `Crenshaw's intersectionality emerged from critical race theory and Black feminist thought, specifically the inadequacy of single-axis legal frameworks. Collins's "matrix of domination" situates intersectionality within a broader sociological analysis of interlocking systems. Cho, Crenshaw, and McCall (2013) distinguish between intersectionality as a field of study, an analytical framework, and a political intervention. McCall's methodological typology — anticategorical, intracategorical, and intercategorical complexity — addresses how researchers can operationalize intersectional analysis without either essentializing categories or dissolving them entirely. Critics from the left (e.g., Haider) worry about intersectionality's co-optation into neoliberal diversity frameworks that celebrate identity while ignoring structural redistribution. The framework's ongoing challenge is maintaining its structural, systemic focus while remaining accessible as an organizing tool.`,
      },

      digDeeper: [
        {
          title: "The Combahee River Collective Statement (1977)",
          content: `Before the term "intersectionality" existed, Black feminist organizations were doing intersectional analysis. The Combahee River Collective — a group of Black lesbian feminists active in Boston in the 1970s — issued a statement in 1977 that articulated the interlocking nature of racial, sexual, heterosexual, and class oppression. They argued that their liberation required the destruction of all these systems simultaneously, because they experienced all of them simultaneously. The statement is considered a foundational document of intersectional politics and introduced the concept that became known as "identity politics" — originally meaning politics grounded in the material conditions of lived experience, not the individualized version the term often connotes today.`,
          sourceCitations: ["combahee-river-collective"],
        },
        {
          title: "Maternal Mortality and the Intersection of Race and Gender",
          content: `The U.S. has the highest maternal mortality rate among wealthy nations, and Black women bear a wildly disproportionate burden: they are three to four times more likely to die from pregnancy-related complications than white women. Critically, this disparity persists across income and education levels. Serena Williams — one of the most famous athletes in the world — has spoken publicly about how her reports of post-delivery pain were initially dismissed by medical staff, nearly costing her life. Research points to multiple intersecting causes: implicit bias in medicine (studies show physicians systematically underestimate Black patients' pain), the cumulative stress of lifelong racism on the body ("weathering"), and healthcare systems that were not designed with Black women's experiences in mind.`,
          sourceCitations: ["villarosa-maternal-mortality"],
        },
      ],

      quiz: [
        {
          id: "q6-1",
          question: "Kimberle Crenshaw coined the term 'intersectionality' in what year?",
          type: "multiple_choice",
          options: ["1977", "1983", "1989", "1995"],
          correctAnswer: 2,
          explanation:
            "Crenshaw coined 'intersectionality' in her 1989 paper, though the ideas it describes had been articulated by Black feminists — including the Combahee River Collective — for years prior.",
          sourceCitations: ["crenshaw-intersectionality"],
        },
        {
          id: "q6-2",
          question:
            "In DeGraffenreid v. General Motors, the court found that Black women experienced a form of compound discrimination.",
          type: "true_false",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation:
            "The court rejected the Black women's claim, reasoning that GM hired Black people (men) and women (white women), so there was no discrimination. This failure to see compound discrimination is what prompted Crenshaw to develop the intersectionality framework.",
          sourceCitations: ["crenshaw-intersectionality"],
        },
        {
          id: "q6-3",
          question:
            "Black women are how many times more likely to die from pregnancy-related complications than white women?",
          type: "multiple_choice",
          options: [
            "1.5 to 2 times",
            "3 to 4 times",
            "5 to 6 times",
            "8 to 10 times",
          ],
          correctAnswer: 1,
          explanation:
            "Black women are three to four times more likely to die from pregnancy-related causes — a disparity that persists across income and education levels, pointing to systemic rather than individual causes.",
          sourceCitations: ["villarosa-maternal-mortality"],
        },
      ],
      connections: [
        "what-is-social-justice",
        "environmental-justice",
        "taking-action",
      ],
    },

    // ── Section 7: Taking Action ────────────────────────────────────
    {
      id: "taking-action",
      title: "Taking Action: From Awareness to Advocacy",
      order: 7,
      summary: `Understanding social justice is necessary but not sufficient. The gap between awareness and action is where many people get stuck — overwhelmed by the scale of the problems, uncertain about what they can do, or afraid of making mistakes. This section maps concrete pathways from learning to doing.

**Start Where You Are.** Effective social justice work begins with honest self-assessment. What communities are you part of? What institutions do you interact with daily — your school, workplace, neighborhood, religious community, local government? What power do you have within those institutions, however modest? The most impactful action is often local and specific: pushing your school board to change a disciplinary policy, organizing your workplace around pay equity, showing up to a city council hearing on a zoning decision. Grand gestures matter less than sustained, informed engagement.

**Educate Continuously.** Reading one book or taking one course is a start, not an endpoint. Social justice work requires ongoing education — not only about issues but about the communities most affected. Prioritize sources written by people with lived experience of the issues. Follow organizations doing the work, not just commentators talking about it. Be willing to have your assumptions challenged. The goal is not to arrive at a fixed position but to keep learning, adjusting, and deepening your understanding.

**Listen Before You Lead.** One of the most common and most damaging patterns in social justice work is people with privilege centering themselves — their feelings, their ideas, their leadership — in spaces where the affected community should be leading. Effective allyship means showing up, listening, taking direction from those most impacted, doing unglamorous work, and resisting the urge to be the hero of the story. This is not passive — it requires active engagement, but with humility about your role.

**Organize, Don't Just Advocate.** Individual advocacy — calling a legislator, writing a letter — matters but has limited impact in isolation. Organizing is about building collective power: bringing people together around shared interests, developing strategies, sustaining pressure over time. The history of social justice is a history of organized movements, not lone voices. If you're not part of an organization working on the issues you care about, join one. If one doesn't exist, start one.

**Engage with Policy.** Social justice is ultimately about changing the rules — laws, budgets, institutional practices — that produce unequal outcomes. This means engaging with policy at every level: attending school board meetings, voting in every election (especially local ones), supporting ballot initiatives, testifying at public hearings, and understanding how budgets work. "Where the money goes" is one of the most concrete expressions of a society's values.

**Navigate Discomfort.** Social justice work is uncomfortable — especially for people who benefit from existing arrangements. Guilt, defensiveness, fear of saying the wrong thing, and fatigue are all normal responses. They are not reasons to disengage. The discomfort of confronting injustice is small compared to the discomfort of living under it. Move through the discomfort rather than around it. Make mistakes, take responsibility, learn, and keep going.

**Sustain the Work.** Burnout is one of the greatest threats to social justice movements. The work is long, the setbacks are frequent, and the emotional toll is real — especially for people who are directly affected by the injustices they're fighting. Sustainable activism requires community (you cannot do this alone), boundaries (you cannot attend every rally or read every article), joy (movements that are only about suffering don't survive), and a long-term orientation. The abolitionists, the suffragists, the civil rights workers all operated on generational timescales. Justice is not a sprint.

**Accountability.** Social justice work is not about being a "good person" — it's about what you do. Accountability means being open to critique, willing to change your behavior, and committed to following through on what you say you'll do. It means centering impact over intent: if your action caused harm, the fact that you meant well doesn't erase the harm. It means showing up consistently, not just when it's trending.

**Concrete First Steps.**
- Learn the names and platforms of your local elected officials
- Identify one issue you care about and one organization working on it in your area
- Attend one public meeting (school board, city council, community forum) in the next month
- Read one book by someone directly affected by an issue you care about
- Have one honest conversation about a justice issue with someone in your life
- If you have financial resources, donate to organizations led by affected communities
- If you have time, volunteer — but ask the organization what they need, rather than assuming`,

      keyConcepts: [
        {
          term: "Allyship",
          definition:
            "Active, ongoing engagement in supporting marginalized communities — characterized by listening, taking direction, doing unglamorous work, and centering the leadership of those most affected.",
          relatedConcepts: [
            "Solidarity",
            "Accomplice",
            "Centering Affected Voices",
          ],
        },
        {
          term: "Organizing vs. Advocacy",
          definition:
            "Advocacy is an individual speaking out; organizing is building collective power through sustained coordination among people with shared interests.",
          relatedConcepts: [
            "Collective Action",
            "Movement Building",
            "Coalition",
          ],
        },
        {
          term: "Impact Over Intent",
          definition:
            "The principle that the effect of an action matters more than the motivation behind it — if harm was done, good intentions do not erase it.",
          relatedConcepts: ["Accountability", "Allyship"],
        },
        {
          term: "Sustainable Activism",
          definition:
            "Approaches to justice work that prevent burnout by building community, setting boundaries, making room for joy, and operating on generational timescales.",
          relatedConcepts: ["Burnout", "Movement Building"],
        },
      ],

      explainFurther: {
        eli5: `Learning about unfairness is important, but knowing about it isn't enough — you have to do something. The best things you can do are: listen to people who are affected, join groups that are already working on the problem, show up to meetings where decisions are made, and keep going even when it's hard. You don't have to fix everything by yourself — the point is to work together over a long time.`,
        intermediate: `The path from awareness to action involves: self-education (ongoing, not one-time), listening to affected communities rather than centering yourself, engaging with policy and institutions (not just posting online), organizing collectively rather than acting alone, and sustaining your commitment over the long term. Effective social justice work is local, specific, and informed — it's about changing the rules and budgets that shape people's lives, not about personal virtue.`,
        advanced: `The theory of change underlying social justice praxis draws on multiple traditions. Alinsky-style community organizing emphasizes building power through self-interest and institutional pressure. Freirean pedagogy centers "conscientization" — the development of critical consciousness through dialogue and reflection-in-action. Gramsci's concept of cultural hegemony explains why oppressed groups sometimes consent to systems that harm them, and why counter-hegemonic education and organization are necessary. Contemporary debates about "prefigurative politics" (embodying the world you want to create within your organizing structures) versus "strategic politics" (making pragmatic compromises to win concrete gains) remain unresolved and productive. The tension between reform and transformation — between winning improvements within existing systems and building alternatives that could replace them — is a persistent challenge that resists theoretical resolution and must be navigated in practice.`,
      },

      digDeeper: [
        {
          title: "The Difference Between Being Nice and Being Just",
          content: `Many people equate social justice with being kind, tolerant, or inclusive in their personal interactions. While interpersonal decency matters, social justice is fundamentally about structures and systems, not individual niceness. A company can have a diverse workforce, celebrate heritage months, and still pay poverty wages, bust unions, and lobby against environmental regulation. A person can be warm and generous in daily life and still benefit from — and fail to challenge — systems that produce inequality. Social justice work requires moving from personal virtue to structural engagement: asking not just "am I a good person?" but "what systems am I part of, and what are they doing?"`,
          sourceCitations: [],
        },
        {
          title: "How to Evaluate Organizations Before You Join or Donate",
          content: `Not all organizations claiming to do social justice work are effective, accountable, or led by the communities they serve. Before joining or donating, consider: Is the organization led by people directly affected by the issue? Does it have a clear theory of change (how it plans to produce results)? Is it transparent about its finances and decision-making? Does it organize for systemic change, or does it focus primarily on awareness and branding? Does it build power in affected communities, or does it substitute its own voice for theirs? Organizations like GiveDirectly, community land trusts, worker cooperatives, and grassroots policy organizations often operate very differently from large national nonprofits.`,
          sourceCitations: [],
        },
      ],

      quiz: [
        {
          id: "q7-1",
          question: "What is the key difference between advocacy and organizing?",
          type: "multiple_choice",
          options: [
            "Advocacy is legal; organizing is illegal",
            "Advocacy is individual voice; organizing builds collective power",
            "Organizing is for professionals; advocacy is for volunteers",
            "There is no meaningful difference",
          ],
          correctAnswer: 1,
          explanation:
            "Advocacy is an individual speaking out, while organizing is about building collective power through sustained coordination among people with shared interests. Social justice movements are built on organizing, not individual voices alone.",
          sourceCitations: [],
        },
        {
          id: "q7-2",
          question:
            "'Impact over intent' means that good intentions excuse harmful outcomes.",
          type: "true_false",
          options: ["True", "False"],
          correctAnswer: 1,
          explanation:
            "The opposite: 'impact over intent' means that if an action caused harm, the fact that you meant well does not erase the harm. Accountability requires centering the impact of your actions, not your intentions.",
          sourceCitations: [],
        },
        {
          id: "q7-3",
          question:
            "Which of the following is the LEAST effective approach to social justice engagement?",
          type: "multiple_choice",
          options: [
            "Attending local school board meetings about disciplinary policy",
            "Posting about justice issues on social media without further action",
            "Joining a community organization working on an issue you care about",
            "Donating to organizations led by affected communities",
          ],
          correctAnswer: 1,
          explanation:
            "While raising awareness has some value, social media posting without further action is the least effective approach listed. The other options all involve direct engagement with institutions, organizations, or resource redistribution.",
          sourceCitations: [],
        },
      ],
      connections: [
        "what-is-social-justice",
        "criminal-justice",
        "intersectionality",
      ],
    },
  ],

  // ── Glossary ────────────────────────────────────────────────────
  glossary: [
    {
      term: "Ableism",
      definition:
        "Discrimination and prejudice against people with disabilities, including the assumption that able-bodied experience is the norm.",
      firstSeenInSection: "intersectionality",
      relatedTerms: ["Disability Justice", "Intersectionality"],
    },
    {
      term: "Abolition",
      definition:
        "Historically, the movement to end slavery. In modern usage, also refers to movements to dismantle prisons, policing, and other carceral institutions, replacing them with community-based alternatives.",
      firstSeenInSection: "historical-movements",
      relatedTerms: ["Mass Incarceration", "Restorative Justice"],
    },
    {
      term: "Allyship",
      definition:
        "Active, ongoing support of marginalized communities by people with privilege, characterized by listening, taking direction, and centering affected voices.",
      firstSeenInSection: "taking-action",
      relatedTerms: ["Solidarity", "Accomplice"],
    },
    {
      term: "Anti-Colonialism",
      definition:
        "Opposition to colonial rule and assertion of colonized peoples' right to self-determination, sovereignty, and cultural preservation.",
      firstSeenInSection: "historical-movements",
      relatedTerms: ["Decolonization", "Self-Determination"],
    },
    {
      term: "Cancer Alley",
      definition:
        "The 85-mile corridor along the Mississippi River in Louisiana with over 150 petrochemical plants, located predominantly in Black communities facing elevated illness rates.",
      firstSeenInSection: "environmental-justice",
      relatedTerms: ["Environmental Racism", "Pollution"],
    },
    {
      term: "Climate Justice",
      definition:
        "Framework asserting that the costs of climate change should be borne by those most responsible and most able to pay, not those least responsible and most vulnerable.",
      firstSeenInSection: "environmental-justice",
      relatedTerms: ["Environmental Justice", "Global South"],
    },
    {
      term: "Collateral Consequences",
      definition:
        "Legal and social barriers that follow a criminal conviction beyond the sentence itself: employment, housing, voting, and public assistance restrictions.",
      firstSeenInSection: "criminal-justice",
      relatedTerms: ["Mass Incarceration", "Reentry"],
    },
    {
      term: "Distributive Justice",
      definition:
        "The fair allocation of resources, opportunities, and burdens across members of a society.",
      firstSeenInSection: "what-is-social-justice",
      relatedTerms: ["Equity", "Economic Justice"],
    },
    {
      term: "Environmental Racism",
      definition:
        "The disproportionate siting of pollution, toxic waste, and environmental hazards in communities of color.",
      firstSeenInSection: "environmental-justice",
      relatedTerms: ["Environmental Justice", "Redlining"],
    },
    {
      term: "Intersectionality",
      definition:
        "Framework for understanding how overlapping systems of oppression create compounded disadvantage that cannot be understood through any single axis. Coined by Kimberle Crenshaw (1989).",
      firstSeenInSection: "intersectionality",
      relatedTerms: ["Compound Discrimination", "Black Feminism"],
    },
    {
      term: "Mass Incarceration",
      definition:
        "The unprecedented expansion of imprisonment in the U.S. since the 1970s, driven by policy choices rather than crime rates, disproportionately affecting Black and Latino communities.",
      firstSeenInSection: "criminal-justice",
      relatedTerms: ["War on Drugs", "The New Jim Crow"],
    },
    {
      term: "Nonviolent Direct Action",
      definition:
        "Protest strategy using boycotts, sit-ins, marches, and civil disobedience to confront injustice without physical violence.",
      firstSeenInSection: "historical-movements",
      relatedTerms: ["Civil Rights Movement", "Organizing"],
    },
    {
      term: "Procedural Justice",
      definition:
        "Fairness in decision-making processes, especially ensuring that affected communities have meaningful voice and participation.",
      firstSeenInSection: "what-is-social-justice",
      relatedTerms: ["Democratic Participation", "Representation"],
    },
    {
      term: "Racial Wealth Gap",
      definition:
        "The persistent disparity in household wealth between white families and families of color, rooted in centuries of policy-driven exclusion and extraction.",
      firstSeenInSection: "economic-justice",
      relatedTerms: ["Redlining", "Structural Racism"],
    },
    {
      term: "Recognition Justice",
      definition:
        "The principle that all people's identities, cultures, and experiences deserve respect and visibility in social institutions.",
      firstSeenInSection: "what-is-social-justice",
      relatedTerms: ["Cultural Erasure", "Misrecognition"],
    },
    {
      term: "Redlining",
      definition:
        "Federal practice (1930s onward) of color-coding neighborhoods and denying mortgages to those rated 'hazardous' — almost always communities of color.",
      firstSeenInSection: "economic-justice",
      relatedTerms: ["Housing Discrimination", "Racial Wealth Gap"],
    },
    {
      term: "Restorative Justice",
      definition:
        "An approach centering harm repair through inclusive processes involving victims, offenders, and communities, rather than punishment alone.",
      firstSeenInSection: "criminal-justice",
      relatedTerms: ["Abolition", "Community Accountability"],
    },
    {
      term: "Structural Inequality",
      definition:
        "Disadvantage embedded in laws, institutions, cultural norms, and economic systems — not arising solely from individual prejudice.",
      firstSeenInSection: "what-is-social-justice",
      relatedTerms: ["Systemic Racism", "Institutional Bias"],
    },
    {
      term: "Weathering",
      definition:
        "The hypothesis that chronic exposure to racism causes accelerated biological aging and health deterioration, particularly in Black Americans.",
      firstSeenInSection: "intersectionality",
      relatedTerms: ["Health Disparities", "Allostatic Load"],
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "Isn't social justice just a political opinion?",
      answer:
        "Social justice draws on philosophical traditions going back centuries — Rawls, Sen, Fraser, Young — and is grounded in empirical research about how institutions produce unequal outcomes. You can disagree about specific policies, but the underlying questions (how should resources be distributed? whose voices are included in decision-making? are systems producing fair outcomes?) are not merely partisan — they are foundational questions of political philosophy.",
      relatedSections: ["what-is-social-justice"],
    },
    {
      question: "What's the difference between equality and equity?",
      answer:
        "Equality means giving everyone the same thing. Equity means giving people what they need to achieve comparable outcomes, recognizing that different starting positions require different supports. If three people of different heights are trying to see over a fence, equality gives each the same-sized box; equity gives taller boxes to shorter people so everyone can see.",
      relatedSections: ["what-is-social-justice", "economic-justice"],
    },
    {
      question:
        "Doesn't focusing on race divide people instead of uniting them?",
      answer:
        "Racial division was not created by people who talk about race — it was created by centuries of racially targeted policy: slavery, Jim Crow, redlining, mass incarceration. Ignoring race doesn't make racial disparities disappear; it makes them invisible. Naming the problem is a precondition for solving it. Many social justice frameworks explicitly seek multiracial solidarity — but solidarity built on honest acknowledgment of differences, not colorblind denial of them.",
      relatedSections: [
        "economic-justice",
        "criminal-justice",
        "intersectionality",
      ],
    },
    {
      question:
        "I'm not personally racist/sexist. Why should I be concerned about structural inequality?",
      answer:
        "Structural inequality does not require individual bad actors. A person can be warm, generous, and free of prejudice while participating in systems (tax structures, housing markets, school funding formulas) that produce unequal outcomes. Social justice asks us to look beyond our personal behavior to the systems we participate in and benefit from — and to take responsibility for changing those systems, not just our individual attitudes.",
      relatedSections: ["what-is-social-justice", "taking-action"],
    },
    {
      question: "What about personal responsibility?",
      answer:
        "Personal responsibility and structural analysis are not opposites. Individuals make choices, and those choices matter. But choices are made within contexts: the options available, the information accessible, the safety nets present or absent. A person working two minimum-wage jobs and still unable to afford housing is not suffering from a personal responsibility deficit — they are navigating a system that does not pay enough to live on. Social justice asks why the system is structured that way and how to change it.",
      relatedSections: ["economic-justice"],
    },
    {
      question: "Where do I start if I want to get involved?",
      answer:
        "Start local, start specific, and start listening. Identify one issue you care about. Find an organization in your community working on it. Attend a meeting. Read what the affected community has written. Learn who your local elected officials are and what they're doing. Social justice work is sustained, organized, and collective — the most important step is connecting with others already doing the work, rather than trying to act alone.",
      relatedSections: ["taking-action"],
    },
    {
      question: "Can you be committed to social justice and still disagree about specific policies?",
      answer:
        "Absolutely. Social justice is a commitment to fairness, dignity, and equal voice — not a specific policy platform. Reasonable people who share those commitments can disagree about whether a $15 or $20 minimum wage is better, whether school integration is best achieved through busing or magnet schools, or whether carbon taxes or cap-and-trade are more effective. The commitment is to the principles and the evidence; the policy debates are how we work out the details.",
      relatedSections: ["what-is-social-justice", "taking-action"],
    },
  ],

  // ── Sources ─────────────────────────────────────────────────────
  sources: [
    {
      id: "rawls-theory-of-justice",
      title: "A Theory of Justice",
      author: "John Rawls",
      year: 1971,
      description:
        "Foundational work in political philosophy introducing the 'original position,' the 'veil of ignorance,' and the difference principle as bases for a just society.",
    },
    {
      id: "fraser-scales-of-justice",
      title: "Scales of Justice: Reimagining Political Space in a Globalizing World",
      author: "Nancy Fraser",
      year: 2009,
      description:
        "Expands justice theory to three dimensions: redistribution, recognition, and representation.",
    },
    {
      id: "alexander-new-jim-crow",
      title: "The New Jim Crow: Mass Incarceration in the Age of Colorblindness",
      author: "Michelle Alexander",
      year: 2010,
      description:
        "Argues that mass incarceration functions as a system of racial control analogous to Jim Crow.",
    },
    {
      id: "dubois-black-reconstruction",
      title: "Black Reconstruction in America",
      author: "W.E.B. Du Bois",
      year: 1935,
      description:
        "Reinterprets the Reconstruction era, arguing that its failure was due to deliberate sabotage of multiracial democracy.",
    },
    {
      id: "von-drehle-triangle",
      title: "Triangle: The Fire That Changed America",
      author: "David Von Drehle",
      year: 2003,
      description:
        "Account of the 1911 Triangle Shirtwaist Factory fire and its impact on labor reform.",
    },
    {
      id: "desmond-evicted",
      title: "Evicted: Poverty and Profit in the American City",
      author: "Matthew Desmond",
      year: 2016,
      description:
        "Pulitzer Prize-winning study of eviction as both consequence and cause of poverty in America.",
    },
    {
      id: "rothstein-color-of-law",
      title: "The Color of Law: A Forgotten History of How Our Government Segregated America",
      author: "Richard Rothstein",
      year: 2017,
      description:
        "Documents how federal, state, and local policies deliberately created and maintained racial residential segregation.",
    },
    {
      id: "kaba-we-do-this",
      title: "We Do This 'Til We Free Us: Abolitionist Organizing and Transforming Justice",
      author: "Mariame Kaba",
      year: 2021,
      description:
        "Collection of essays on prison abolition, restorative justice, and building community safety.",
    },
    {
      id: "advancement-project-pipeline",
      title: "Test, Punish, and Push Out: How Zero Tolerance and High-Stakes Testing Funnel Youth Into the School-to-Prison Pipeline",
      author: "Advancement Project",
      year: 2010,
      description:
        "Documents how harsh school disciplinary policies disproportionately affect Black and disabled students.",
    },
    {
      id: "hanna-attisha-flint",
      title: "What the Eyes Don't See: A Story of Crisis, Resistance, and Hope in an American City",
      author: "Mona Hanna-Attisha",
      year: 2018,
      description:
        "First-person account by the pediatrician who documented lead contamination in Flint's children.",
    },
    {
      id: "estes-our-history-is-future",
      title: "Our History Is the Future: Standing Rock Versus the Dakota Access Pipeline",
      author: "Nick Estes",
      year: 2019,
      description:
        "Places the Standing Rock resistance within the longer history of Indigenous struggles for sovereignty and environmental justice.",
    },
    {
      id: "crenshaw-intersectionality",
      title: "Demarginalizing the Intersection of Race and Sex",
      author: "Kimberle Crenshaw",
      year: 1989,
      description:
        "The paper that coined 'intersectionality,' analyzing how courts failed to see compound discrimination against Black women.",
    },
    {
      id: "combahee-river-collective",
      title: "The Combahee River Collective Statement",
      author: "Combahee River Collective",
      year: 1977,
      description:
        "Foundational Black feminist document articulating interlocking oppressions of race, sex, class, and sexuality.",
    },
    {
      id: "villarosa-maternal-mortality",
      title: "Under the Skin: The Hidden Toll of Racism on American Lives and on the Health of Our Nation",
      author: "Linda Villarosa",
      year: 2022,
      description:
        "Investigates racial health disparities, including the maternal mortality crisis, and their roots in medical racism and structural inequality.",
    },
  ],
};

export default module;
