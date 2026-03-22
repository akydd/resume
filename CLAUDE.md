# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build

Compile any `.tex` file to PDF from the `moderncv/` directory:

```bash
cd moderncv && pdflatex <filename>.tex
```

For example:
```bash
cd moderncv && pdflatex resume_v2.tex
cd moderncv && pdflatex letter.tex
```

## Structure

- `moderncv/resume_v2.tex` — current primary resume (uses `moderncv` LaTeX class, `fancy` style, blue color theme)
- `moderncv/resume.tex` — older resume version (kept for reference)
- `moderncv/letter.tex` — generic/template cover letter
- `moderncv/letter_<company>.tex` — company-specific cover letters (dropbox, shippo, stripe, stripe_2, reddit, 1pass, biotz, sardine, affirm, kidoz, monks, monks_2, elasticpath, mercury, stripe_2)
- `moderncv/references.tex` — references page (can be `\input`'d into resume if needed)

## Cover letter workflow

When creating a new company-specific cover letter, copy `letter.tex` to `letter_<company>.tex` and customize the opening paragraph with the role, company name, and personal motivation. The personal data block (name, email, social links) is shared boilerplate at the top of each letter file.

Use the `/cover-letter <url>` skill to automatically generate a cover letter from a job posting URL. The skill fetches the posting, reads the resume, writes a tailored `letter_<company>.tex`, and compiles it to PDF. If the URL is from LinkedIn or another login-gated site, the fetch will be blocked — provide the company's own careers page URL instead. If a `letter_<company>.tex` already exists, the skill appends an incrementing counter (e.g. `letter_stripe_2.tex`).

## Key details

- **Subject**: Alan Kydd, Senior Software Engineer — Go, TypeScript, Clojure, React/Redux, AWS, Kubernetes
- **Resume quote**: "Backend Engineer specializing in Go, APIs, and cloud-based SaaS platforms."
- The resume uses `\sethintscolumntowidth{kydd.alan.g@gmail.com}` to align the date column width
- `references.tex` is currently commented out in `resume_v2.tex` — uncomment `\input{references.tex}` to include it
