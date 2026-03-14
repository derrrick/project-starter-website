# Setup Checklist

> Complete these items before going live. Check off as you go.

## Infrastructure (if applicable)
- [ ] **Supabase** — Create project at supabase.com
  - [ ] Copy project URL → `.env.local` as `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] Copy anon key → `.env.local` as `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] Copy service role key → `.env.local` as `SUPABASE_SERVICE_ROLE_KEY`

## Payments (if applicable)
- [ ] **Stripe** — Create account at stripe.com
  - [ ] Copy publishable key → `.env.local` as `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - [ ] Copy secret key → `.env.local` as `STRIPE_SECRET_KEY`
  - [ ] Set up webhook endpoint and copy signing secret → `STRIPE_WEBHOOK_SECRET`

## Auth
- [ ] Configure auth provider (Google, GitHub, etc.) in Supabase dashboard
- [ ] Add OAuth client ID and secret to Supabase auth settings
- [ ] Set redirect URLs for local and production environments

## AI (if applicable)
- [ ] **Claude API** — Get key from console.anthropic.com
  - [ ] Set `ANTHROPIC_API_KEY` in `.env.local`

## Email (if applicable)
- [ ] Configure email service (Resend, Postmark, etc.)
  - [ ] Set API key in `.env.local`
  - [ ] Verify sending domain

## Agents
- [ ] **Claude CLI** — Install and authenticate (`claude login`)
- [ ] Test each agent manually: `./agents/agents.sh <agent-name>`
- [ ] Set up cron jobs for enabled agents (see `agents/.agents-config` for schedule)
  ```
  crontab -e
  # Add entries from agents/.agents-config
  ```

## Domain & DNS
- [ ] Purchase domain
- [ ] Configure DNS records (A, CNAME)
- [ ] SSL certificate (auto via Vercel/provider)

## Analytics
- [ ] Configure analytics tracking (PostHog, Plausible, etc.)
- [ ] Verify key events are firing in development
- [ ] Set up dashboard for core metrics

## Pre-Launch
- [ ] All env vars set in production environment
- [ ] Database migrations applied
- [ ] Payment webhooks connected and verified (if applicable)
- [ ] Auth flow tested end-to-end
- [ ] Agent heartbeats verified after first manual run
