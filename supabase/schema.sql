-- Final Supabase schema for the single Haeun cross-device state.
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.haeun_state (
  id text primary key default 'primary' check (id = 'primary'),
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.haeun_state enable row level security;

revoke all on table public.haeun_state from anon, authenticated;
grant select, insert, update on table public.haeun_state to anon, authenticated;

drop policy if exists "sync code can read haeun state" on public.haeun_state;
drop policy if exists "sync code can create haeun state" on public.haeun_state;
drop policy if exists "sync code can update haeun state" on public.haeun_state;

create policy "sync code can read haeun state"
on public.haeun_state for select
to anon, authenticated
using (
  encode(
    extensions.digest(
      convert_to(
        coalesce(
          (
            coalesce(
              nullif((select current_setting('request.headers', true)), ''),
              '{}'
            )::jsonb ->> 'x-haeun-sync-key'
          ),
          ''
        ),
        'UTF8'
      ),
      'sha256'
    ),
    'hex'
  ) = 'b69518b9d9b91ec6b20ac3610bb52281ee81ddd8673240b456607d05616a6dac'
);

create policy "sync code can create haeun state"
on public.haeun_state for insert
to anon, authenticated
with check (
  id = 'primary'
  and encode(
    extensions.digest(
      convert_to(
        coalesce(
          (
            coalesce(
              nullif((select current_setting('request.headers', true)), ''),
              '{}'
            )::jsonb ->> 'x-haeun-sync-key'
          ),
          ''
        ),
        'UTF8'
      ),
      'sha256'
    ),
    'hex'
  ) = 'b69518b9d9b91ec6b20ac3610bb52281ee81ddd8673240b456607d05616a6dac'
);

create policy "sync code can update haeun state"
on public.haeun_state for update
to anon, authenticated
using (
  encode(
    extensions.digest(
      convert_to(
        coalesce(
          (
            coalesce(
              nullif((select current_setting('request.headers', true)), ''),
              '{}'
            )::jsonb ->> 'x-haeun-sync-key'
          ),
          ''
        ),
        'UTF8'
      ),
      'sha256'
    ),
    'hex'
  ) = 'b69518b9d9b91ec6b20ac3610bb52281ee81ddd8673240b456607d05616a6dac'
)
with check (
  id = 'primary'
  and encode(
    extensions.digest(
      convert_to(
        coalesce(
          (
            coalesce(
              nullif((select current_setting('request.headers', true)), ''),
              '{}'
            )::jsonb ->> 'x-haeun-sync-key'
          ),
          ''
        ),
        'UTF8'
      ),
      'sha256'
    ),
    'hex'
  ) = 'b69518b9d9b91ec6b20ac3610bb52281ee81ddd8673240b456607d05616a6dac'
);

