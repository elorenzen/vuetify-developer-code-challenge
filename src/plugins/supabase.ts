// === TESTING vars ===
// VITE_SUPABASE_URL='https://jstxtewxgsosojkmabra.supabase.co'    
// VITE_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzdHh0ZXd4Z3Nvc29qa21hYnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNzE5NjUsImV4cCI6MjA1Njg0Nzk2NX0.N_k6cjKQ30JS6F9KDGNOpZH9Ai5pXZdxaO1cBJLvPGo'
// === END TESTING ===

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
