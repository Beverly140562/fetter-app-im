const { createClient } = supabase;

const SUPABASE_URL = 'https://wkwbvsubtwxcafpbmgep.supabase.co';
const SUPABASE_ANON_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrd2J2c3VidHd4Y2FmcGJtZ2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NjMzNjgsImV4cCI6MjA2NDIzOTM2OH0.M4YdgQ02S7JBgD4kZ6nCE4AE_iysyhbMKsXUvKtalgo';

window.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY );
