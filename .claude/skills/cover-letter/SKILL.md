---
name: cover-letter-url
description: Generate cover letter text for a job at the provided url.
argument-hint: <url>
allowed-tools: Read, Glob, Bash, Web Fetch
---

Generate a cover letter for the job at url `$ARGUMENTS`.

## Steps

1. Fetch the job posting using two strategies in order:
   a. First try the WebFetch tool on `$ARGUMENTS`.
   b. If that returns a 403, empty body, or a login/bot-block page, fall back to the headless browser script:
      ```bash
      node /Users/alan/projects/akydd/resume/.claude/skills/cover-letter/fetch-page.mjs "$ARGUMENTS"
      ```
   c. If the script exits with code 1 (prints `BLOCKED` to stderr), the site is bot-protected. Tell the user the fetch was blocked and ask them to either:
      - Paste the job description directly into the chat, or
      - Provide the URL of the job on the company's own careers page instead of a job board.
      Then stop and wait for the user.
3. Read `@moderncv/resume_v2.pdf` to extract the candidate's experience.
4. Write the cover letter using the guidelines below.

## Cover letter guidelines

- 3–4 paragraphs, under 350 words
- Professional and direct tone
- Include today's date
- Opening: name the specific role and company, express genuine interest
- Body: connect the candidate's actual experience (from the resume) to the job's required tech stack and responsibilities; reference nice-to-have tech only if supported by the resume
- Closing: one confident sentence, no flowery sign-off
- Do not invent experience not present in the resume
- Output is meant to be read as prose, but inserted into a latex document. Special characters must be handled accordingly, but don't use any other formatting (bullet points, markdown, etc).
- Each paragraph should end with latex code: `\\[0.5cm`. This is needed for spacing.

## Workflow
1. Create a latex file named letter_{company}.tex based on the template below, where {company} is the name of company offering the job, with the generated text inserted appropriately. File should be located in project folder @moderncv. If there's already a file with that name name, add an incremental counter to the file suffix.
2. Compile: `pdflatex -output-directory=moderncv moderncv/letter_company.tex`

## Document Template
```latex
\documentclass[11pt, letterpaper]{moderncv}
\moderncvcolor{blue}
\moderncvstyle{fancy}
\nopagenumbers{}
\usepackage[utf8]{inputenc}

\usepackage[scale=0.8]{geometry}
\recomputelengths

\firstname{Alan}
\familyname{Kydd}
\title{Senior Software Engineer}
\email{kydd.alan.g@gmail.com}
\sethintscolumntowidth{kydd.alan.g@gmail.com}
\social[github]{akydd}
\social[linkedin]{alankydd}

\begin{document}
\maketitle
\begin{flushleft}
% today's date
\\[0.5cm]
To whom it may concern,
\\[0.5cm]

% content here
\\[1.5cm]

Sincerely,\\[0.5cm]
Alan Kydd
\end{flushleft}
\end{document}
```