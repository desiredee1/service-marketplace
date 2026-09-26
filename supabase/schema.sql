-- Safe Supabase schema starter for a service marketplace

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null default 'customer' check (role in ('customer', 'provider', 'admin')),
  phone text,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.providers (
  id uuid primary key references public.profiles(id) on delete cascade,
  profession text not null,
  bio text,
  hourly_rate numeric(10,2) default 0,
  location text,
  is_verified boolean not null default false,
  rating numeric(3,2) default 5,
  jobs_completed integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.service_requests (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.profiles(id) on delete cascade,
  profession text not null,
  title text not null,
  description text not null,
  urgency text not null default 'medium' check (urgency in ('low', 'medium', 'high', 'emergency')),
  location text not null,
  status text not null default 'draft' check (status in ('draft', 'broadcasted', 'accepted', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.service_requests(id) on delete cascade,
  provider_id uuid not null references public.profiles(id) on delete cascade,
  match_score integer not null default 0,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'declined', 'expired')),
  created_at timestamptz not null default now(),
  unique (request_id, provider_id)
);

alter table public.profiles enable row level security;
alter table public.providers enable row level security;
alter table public.service_requests enable row level security;
alter table public.leads enable row level security;

create policy "Profiles visible to everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

create policy "Providers visible to everyone" on public.providers for select using (true);
create policy "Providers manage own records" on public.providers for update using (auth.uid() = id);

create policy "Customers create their own requests" on public.service_requests for insert with check (auth.uid() = customer_id);
create policy "Customers view their own requests" on public.service_requests for select using (auth.uid() = customer_id);

create policy "Providers view assigned leads" on public.leads for select using (auth.uid() = provider_id);
create policy "Providers update their assigned leads" on public.leads for update using (auth.uid() = provider_id);
