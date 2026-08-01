const SUPABASE_URL = "https://uzjcfjksqmjlosfamrup.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6amNmamtzcW1qbG9zZmFtcnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNzY5MjIsImV4cCI6MjEwMDk1MjkyMn0.De37nBmUkd4xGjoFs3PuyhmDkjx2lzSDEdmcb0bltD0";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);