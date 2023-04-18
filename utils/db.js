import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseURL = "https://nuwjkgahpiufhgtcgwei.supabase.co";
const supabaseKEY = process.env.SUPABASE;

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export const supabase = createClient(supabaseURL, supabaseKEY);
