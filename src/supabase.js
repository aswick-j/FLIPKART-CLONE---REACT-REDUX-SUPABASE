import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "SUPABASE URL";
const supabaseKey = "SUPABASE KEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
