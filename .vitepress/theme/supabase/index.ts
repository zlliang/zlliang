import { createClient } from '@supabase/supabase-js'

const URL = 'https://mnzhcyitzjihstbwyvet.supabase.co'
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uemhjeWl0emppaHN0Ynd5dmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5ODk0ODAsImV4cCI6MTk5MTU2NTQ4MH0.ex7bLVWnWmbQs7uc4sCzuT4KDuWiwrt0Rhu8q1yZVSk'

export const supabase = createClient(URL, ANON_KEY)
