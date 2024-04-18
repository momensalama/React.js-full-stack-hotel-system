import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_supabaseUrl;
export const supabaseKey = import.meta.env.VITE_supabaseKey;

export const supabase = createClient(supabaseUrl, supabaseKey);
