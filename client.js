
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hasrsnqowgoqruxqizbq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhc3JzbnFvd2dvcXJ1eHFpemJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDEyMTAsImV4cCI6MjA0MDYxNzIxMH0.nl_ERl9GjUU-Mfx085li2P-50JYqFwCw8i_jU9uYGOE';
export const supabase = createClient(supabaseUrl, supabaseKey)