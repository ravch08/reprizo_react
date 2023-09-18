import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lkrnngrzjrcfrcpvhnpd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrcm5uZ3J6anJjZnJjcHZobnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3NTI1NjYsImV4cCI6MjAxMDMyODU2Nn0.q2yB9zExCa6dI0e0RCjv6v0i1h3IAl5jSOXvdVA_PIo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
