# SkillRegistry by Ahsun

SkillRegistry is a public job-preparation website with AI résumé matching, evidence and gap dashboards, direct course recommendations, a printable résumé builder, private report history, and a private document vault. The site uses the supplied SkillRegistry by Ahsun logo.

## 1. Publish the guest features from Safari

1. In Files, tap skillregistry-publish.zip to extract it. Create a GitHub repository with Add README enabled, or open your existing SkillRegistry repository.
2. On the repository Code tab, select Add file → Upload files. Upload or replace **worker.mjs, page.mjs, courses.mjs, logo.mjs, and wrangler.jsonc** at the repository root. Commit to main. The two SQL files are run in Supabase.
3. Open Cloudflare Dashboard → Workers & Pages → Create application and connect the GitHub repository for a Worker. If already connected, pushing the update triggers the deployment.
4. Use Worker name **skillregistry**, the **main** branch, the repository root, an empty build command, and **npx wrangler deploy** as the deploy command. Stay on Workers Free and deploy. Open the assigned workers.dev link.
5. Load the example and run it after checking consent. Check the evidence dashboard and open a direct course link when the model reports a catalog-covered gap. The displayed percentage compares the documents; it is not a hiring prediction. Try another résumé and a PDF with selectable text.

## 2. Enable private history and document storage

1. Open or create a Supabase Free project. In SQL Editor, run **reports.sql**, then **vault.sql**. These scripts can also be run again on an existing SkillRegistry project. The private bucket accepts PDF, DOCX, and TXT files up to 10 MiB each. The project has **1 GB shared free file storage** across accounts. The displayed usage covers the current user’s loaded files.
2. In Authentication → URL Configuration, use your public SkillRegistry URL as the Site URL. Add that same URL with its trailing slash to Redirect URLs.
3. In your Cloudflare Worker’s Settings → Variables and Secrets, add **SUPABASE_URL** (https://YOUR_PROJECT.supabase.co) and **SUPABASE_PUBLISHABLE_KEY** (starts with sb_publishable_). Deploy. The included Wrangler config preserves dashboard variables across GitHub redeployments. Keep OAuth provider secrets in Supabase provider settings. Do not upload secrets to GitHub.
4. Configure Google first. Create a web OAuth client in Google Cloud. If asked, enter the SkillRegistry origin under authorized JavaScript origins. Under authorized redirect URIs, paste the exact **Supabase callback URL** shown in the Google provider settings. Put the Google client ID and secret in Supabase’s Google provider. For public access, use an external audience and publish the Google app following Google’s steps. While testing, use an approved test account.
5. For GitHub, LinkedIn, or Discord, create an OAuth application with the provider. Paste the callback shown in its Supabase provider settings into the provider’s OAuth configuration. Enter the credentials in Supabase and enable the provider there. LinkedIn requires **Sign In with LinkedIn using OpenID Connect** on the LinkedIn developer app. Put the matching text variable below in Cloudflare and redeploy.

| Provider | Cloudflare variable to show it |
|---|---|
| Google | Shows when the Supabase URL and publishable key are set |
| GitHub | GITHUB_SIGN_IN=true |
| LinkedIn OIDC | LINKEDIN_SIGN_IN=true |
| Discord | DISCORD_SIGN_IN=true |

6. Sign into account A and upload a small PDF, download it, and save a match report. Sign out and sign into account B, which should have its own empty history and vault. Return to account A and try deleting both items. Verify the bucket is marked private in Supabase. Configure and test each OAuth provider before displaying its button for public users.

## Workflow and operating costs

- The résumé builder previews an in-session draft and can open it in Job Match or print it as a PDF. To keep a copy, save the PDF and upload it to the vault. The builder excludes the name and contact line from the Job Match input.
- The vault is independent of AI analysis. An explicit match submission sends reviewed text to Cloudflare Workers AI. Only report excerpts deliberately saved from the report appear in private history. Learning completion is stored in the current browser.
- Direct lessons are maintained in **courses.mjs**. An uncovered gap has no fabricated recommendation. Some tutorials have optional paid certificates or provider registration.
- Keep Cloudflare and Supabase on their free plans for a zero-upfront-cost launch within their limits. AI can pause at the free allocation. Storage capacity is shared, so check the project dashboard as usage grows.
- To display **Support SkillRegistry**, add **SUPPORT_URL** with a hosted payment or support page. To display a clearly labeled **Sponsored partner** link, add **SPONSOR_URL** after arranging a partner. Both require HTTPS URLs, and both are optional. Fees and income depend on the provider, partner, and visitors.

## Official setup references

- https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/
- https://developers.cloudflare.com/workers-ai/platform/pricing/
- https://supabase.com/pricing
- https://supabase.com/docs/guides/storage/security/access-control
- https://supabase.com/docs/guides/auth/redirect-urls
- https://supabase.com/docs/guides/auth/social-sign-in/auth-google
- https://supabase.com/docs/guides/auth/social-sign-in/auth-github
- https://supabase.com/docs/guides/auth/social-sign-in/auth-linkedin
- https://supabase.com/docs/guides/auth/social-sign-in/auth-discord
