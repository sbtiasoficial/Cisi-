// Configuración pública del cliente Cisi. La publishable key puede estar en el frontend.
// Nunca colocar aquí una service_role key ni una secret key.
const CISI_SUPABASE_URL = 'https://lgrpkourixqojxxvxaho.supabase.co';
const CISI_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_88YNdTulu-z7oon2hV0zwA_F72YzLaq';
window.cisiDb = window.supabase.createClient(CISI_SUPABASE_URL, CISI_SUPABASE_PUBLISHABLE_KEY);
