// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xucileeuehclzyovxcnn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1Y2lsZWV1ZWhjbHp5b3Z4Y25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2NTA3NTcsImV4cCI6MjA1MDIyNjc1N30.Mgbgio04Y3nzjfSBGnYckuCs9alKSJ-j0gM26fChfV0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);