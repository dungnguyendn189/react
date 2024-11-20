
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://sraejyantmzxiomgrsae.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyYWVqeWFudG16eGlvbWdyc2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyOTgxOTAsImV4cCI6MjA0Njg3NDE5MH0.0wWtws_mNQ3L8nAY-3b9ryrAWqOj9SivBEKIKy83auI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;