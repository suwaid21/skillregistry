create table if not exists public.skillregistry_reports (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  title text not null check (char_length(title) between 1 and 100),
  report jsonb not null check (jsonb_typeof(report) = 'object' and octet_length(report::text) <= 26000)
);

alter table public.skillregistry_reports enable row level security;
revoke all on public.skillregistry_reports from public, anon, authenticated;
grant select, delete on public.skillregistry_reports to authenticated;
grant insert (title, report) on public.skillregistry_reports to authenticated;

drop policy if exists "Read own reports" on public.skillregistry_reports;
drop policy if exists "Insert own reports" on public.skillregistry_reports;
drop policy if exists "Delete own reports" on public.skillregistry_reports;
create policy "Read own reports" on public.skillregistry_reports for select to authenticated using ((select auth.uid()) = owner_id);
create policy "Insert own reports" on public.skillregistry_reports for insert to authenticated with check ((select auth.uid()) = owner_id);
create policy "Delete own reports" on public.skillregistry_reports for delete to authenticated using ((select auth.uid()) = owner_id);
create index if not exists skillregistry_reports_owner_date on public.skillregistry_reports (owner_id, created_at desc);
