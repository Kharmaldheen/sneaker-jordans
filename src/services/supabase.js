import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ubirccpcahtnnvqlyqpj.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViaXJjY3BjYWh0bm52cWx5cXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1ODkzOTEsImV4cCI6MjAxNDE2NTM5MX0.x847z9O9jrT_RcXGbEnziBEaR2EDnk04WjA4MZH7DB8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
