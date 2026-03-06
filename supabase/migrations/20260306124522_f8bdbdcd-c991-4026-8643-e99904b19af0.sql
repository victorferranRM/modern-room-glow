
-- Rate limiting table for public endpoints
CREATE TABLE public.rate_limit_state (
  ip_key TEXT PRIMARY KEY,
  request_count INTEGER DEFAULT 1,
  window_start TIMESTAMPTZ DEFAULT NOW()
);

-- Allow edge functions to read/write via service role (no RLS needed, accessed server-side only)
ALTER TABLE public.rate_limit_state ENABLE ROW LEVEL SECURITY;

-- No public policies - only accessible via service role key from edge functions
