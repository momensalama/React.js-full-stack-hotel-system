import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qaargzufbdahssxntpar.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhYXJnenVmYmRhaHNzeG50cGFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1MTk2NjUsImV4cCI6MjAwNTA5NTY2NX0.UqZf4b8FAhfLUuQezsP9Sg2ewgGiWEgKrhbdljt_fGE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
