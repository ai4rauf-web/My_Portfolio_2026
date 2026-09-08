# Secrets Changelog

Tracks changes to environment-based secrets. **No secret values are stored in this repo** (it is public). The source of truth for all secrets is the Vercel project env (Production / Preview / Development).

## 2026-09-08 — Case study passwords

- **`CASE_STUDY_PASSWORDS`** rotated for all four case studies (`daitics-cdp`, `mviva-cvmaas`, `rmn-dolphin`, `shop-manage`).
- Applied to Vercel env in **Production, Preview, and Development**; local `.env.local` updated to match.
- Requires a production redeploy to take effect (env changes don't apply to existing deployments).
- Consumed by `api/unlock.ts` via `process.env.CASE_STUDY_PASSWORDS` (JSON: `{ "<slug>": "<password>" }`).

### To rotate again
1. `vercel env rm CASE_STUDY_PASSWORDS <env>` then `vercel env add CASE_STUDY_PASSWORDS <env>` for each of production/preview/development.
2. Update local `.env.local` to match.
3. Redeploy production (`vercel deploy --prod`).
