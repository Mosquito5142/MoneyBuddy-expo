
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://kseocrgtqbzrdfojezts.supabase.co',
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZW9jcmd0cWJ6cmRmb2plenRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNjgyMzcsImV4cCI6MjAyODk0NDIzN30.piOzCBVdBd_bLO7rAOwHwaLDNpfA2ybf3oVLLrcYmrg')