# Self-hosted fonts

This directory contains WOFF2 subsets used by the English, Simplified Chinese,
and Traditional Chinese versions of the site. The subsets include the text
currently present under `src/` plus common Latin, punctuation, currency, and
arrow characters.

Upstream sources:

- Source Sans 3: https://github.com/google/fonts/tree/main/ofl/sourcesans3
- EB Garamond: https://github.com/google/fonts/tree/main/ofl/ebgaramond
- Noto Sans SC: https://github.com/google/fonts/tree/main/ofl/notosanssc
- Noto Sans HK: https://github.com/google/fonts/tree/main/ofl/notosanshk
- Noto Serif SC: https://github.com/google/fonts/tree/main/ofl/notoserifsc
- Noto Serif HK: https://github.com/google/fonts/tree/main/ofl/notoserifhk

All families are distributed under the SIL Open Font License 1.1. Copies of
the upstream licenses are stored in `licenses/`. When new site content adds
characters that are not already used elsewhere, regenerate the corresponding
CJK subsets from the current source text.
