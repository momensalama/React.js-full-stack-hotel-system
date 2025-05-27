// @ts-nocheck
// @ts-nocheck

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as any;
export const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as any;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
