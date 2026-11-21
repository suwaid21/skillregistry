-- Run in the Supabase SQL Editor after reports.sql.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'skillregistry-vault', 'skillregistry-vault', false, 10485760,
  array['application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document','text/plain']
)
on conflict (id) do update set public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Vault list and read own files" on storage.objects;
drop policy if exists "Vault upload own files" on storage.objects;
drop policy if exists "Vault delete own files" on storage.objects;

create policy "Vault list and read own files" on storage.objects
for select to authenticated
using (bucket_id = 'skillregistry-vault'
  and (storage.foldername(name))[1] = (select auth.uid()::text));

create policy "Vault upload own files" on storage.objects
for insert to authenticated
with check (bucket_id = 'skillregistry-vault'
  and cardinality(storage.foldername(name)) = 1
  and (storage.foldername(name))[1] = (select auth.uid()::text)
  and lower(storage.extension(name)) in ('pdf','docx','txt'));

create policy "Vault delete own files" on storage.objects
for delete to authenticated
using (bucket_id = 'skillregistry-vault'
  and (storage.foldername(name))[1] = (select auth.uid()::text));
