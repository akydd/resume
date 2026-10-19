---
name: create-resume
description: Generate a resume and cover letter for the pasted in job description.
argument-hint: <description> <company>
allowed-tools: Read, Write, Bash
---

# Create Resume

## Instructions

### Step 1:  Compare the job description to the source data
Compare the work experience in @resume_all.md to all the skills listed in `$1`.

### Step 2: Identify skill gaps
If all skills listed in `$1` are already in @resume_all.md, so that no skills gaps are detected, then skip to Step 3.

For each gap, prompt the user to either provide some work experience that closes the gap, or to skip.
Iterate on this until you determine that the gap is sufficiently closed, or the user skips.

Take the user-provided experience and add it to @resume_all.md appropriately, wording it nicely, so that the user doesn't have to add the same information in successive runs of this skill.

### Step 3: Create the resume

1. Using the resume data from Step 1, create a latex file named resume_`$2`.tex based on the template below, where `$2` is the name of company offering the job, with the generated text inserted appropriately. File should be located in project folder @rover-resume. If there's already a file with that name name, add an incremental counter to the file prefix.
2. Compile: `pdflatex -output-directory=rover-resume rover-resume/resume_company.tex`
3. Target a full two pages. If the compiled resume is over 2 pages long, trim the least important data and recompile until it fits. If it is noticeably short of two full pages and relevant material remains in @resume_all.md (especially ownership and cross-team/operational impact bullets), add that material and recompile rather than leaving the second page underused.

#### Resume guidelines
You are an expert resume writer.
Use the file @rover-resume/resume_backend_v2.tex as the style reference.
Limit the skills in the new resume to only those that are aligned with the job description.

Every bullet point and every entry in the Key Skills section must map directly or indirectly to a required or nice-to-have skill in the JD. Remove or reframe anything that doesn't. If a bullet can be reworded to surface a relevant angle (e.g. reframing a data pipeline bullet to match "automation pipelines"), do that rather than cutting. If it can't be connected to the JD at all, cut it.

Only include skills, tools, and technologies that are present in @resume_all.md. Do not infer, assume, or add anything that isn't explicitly listed there — even if the JD asks for it and it seems like a reasonable fit.

Demonstrate ownership and impact with external and cross-functional teams. The resume must not read as task-level work only; show cross-functional leverage, shared workflows, and measurable business results. Draw only from what is present in @resume_all.md and do not invent impact; prefer items that align with the JD, and include at least one or two such bullets. Show this across these areas:

- **Work experience bullet points:** Fold external collaboration directly into the primary role descriptions using strong action verbs (aligned, proposed, unblocked, coordinated, negotiated). For example, state how the candidate partnered with product, security, or client-facing teams to design shared APIs or cut a cross-team delivery bottleneck by a specific percentage (use a number only when the source supports one).
- **System or project scope descriptions:** Clarify the breadth of influence beyond the immediate squad — the workflows, shared services, or multi-team stakeholders affected by the candidate's code.
- **Leverage and enablement metrics:** Show how the work unblocked or accelerated other teams, such as building shared libraries, tooling, standards, or documentation that saved engineering hours across external groups; end on the concrete outcome (what changed and who benefited).

Treat cross-functional and operational collaboration (with Product, marketing, support, operations, finance, security, or external vendors) as first-class impact, equal to technical engineering work. Do not deprioritize or drop this kind of bullet in favour of purely technical ones when there is room to include both; when space allows, include both the technical-ownership and the cross-team/operational examples.

Write in a natural, human voice. Avoid the following AI writing tells:
- Filler verbs: "orchestrated", "engineered", "leveraged", "facilitated", "utilized" — use plain verbs instead ("built", "wrote", "set up", "ran")
- "surface" as a verb — use "show" or "expose"
- Vague three-part lists: "balancing scalability, reliability, and operational simplicity" — either say something specific or cut it
- Meta-commentary on the work: "demonstrating X" or "showcasing Y" — describe what the thing does, not what it proves
- "Proven track record", "at scale", "cross-functional" — remove entirely
- Passive-ish openings: "Contributed to establishing..." — prefer direct ownership ("Helped set up...", "Reviewed...")
- End bullet points with a concrete outcome (a number, a behaviour change, a team unblocked), not a vague clause like "improving operational scalability"
- Use first-person constructions occasionally in the summary ("I have taken...") to break up the wall of past-tense bullets

### Step 4: Create the cover letter

1. Create a latex file named letter_`$2`.tex based on the template and guidelines below, where `$2` is the name of company offering the job, with the generated text inserted appropriately. File should be located in project folder @rover-resume. If there's already a file with that name name, add an incremental counter to the file prefix.
2. Compile: `pdflatex -output-directory=rover-resume rover-resume/letter_company.tex`


#### Cover letter text guidelines
- Professional and direct tone; roughly 350 to 450 words; include today's date.
- Use this 4-paragraph structure:
    1. The hook (role, value, and technical alignment): name the target position and where it was found. Lead with a high-impact thesis that combines the candidate's core technical strength with an ownership mindset (for example, building scalable systems while taking product features from architecture to post-launch reliability). Reference the company's specific tech stack or a recent engineering challenge to show the candidate did their homework.
    2. The tech ability proof (hard skills and architecture): spotlight one or two hard technical achievements that mirror the JD's key requirements. Focus on complexity (distributed systems, low-latency microservices, cloud migration, database optimization). Quantify impact with real metrics (latency reduction, throughput, uptime, cost savings) only where the resume supports a number; never invent one.
    3. The ownership proof (leadership, mentorship, and scope): show accountability beyond writing code, such as owning a technical-debt or incident situation, driving an architectural decision across multiple teams, or introducing a standard the team adopted. Highlight human-multiplier effects (mentoring engineers, improving CI/CD, defining code-review standards) and cross-functional or external-team collaboration. Tie the work to business value (unblocking a product roadmap, reducing churn or escalations). Use only scenarios present in the resume.
    4. The call to action: reiterate genuine enthusiasm for the team's mission or upcoming product goals, close with a direct invitation to a brief discussion or technical chat, and provide contact info plus a link to GitHub or portfolio artifacts where available (for Alan: github.com/akydd and alankydd.wordpress.com).
- Do not invent experience or metrics not present in the resume.
- Output is meant to be read as prose, but inserted into a latex document. Special characters must be handled accordingly, but don't use any other formatting (bullet points, markdown, etc).
- Do not generate text that includes double or triple dashes: "--" or "---".

#### Cover letter template
```latex
\documentclass[11pt,letterpaper]{letter}

\usepackage[margin=0.85in, letterpaper]{geometry}
\usepackage{microtype}
\usepackage{hyperref}
\hypersetup{hidelinks}

\signature{Alan Kydd}
\address{Alan Kydd \\ Sherwood Park, AB \\ 780 232 7870 \\ kydd.alan.g@gmail.com \\ github.com/akydd \\ alankydd.wordpress.com \\ linkedin.com/in/alankydd}

\longindentation=0pt
\begin{document}

\begin{letter}{}

\opening{To whom it may concern,}

% letter content here

\closing{Sincerely,}

\end{letter}
\end{document}

```
