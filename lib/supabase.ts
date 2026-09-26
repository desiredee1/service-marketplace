import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { appConfig } from './config';

export const supabase =
  appConfig.supabaseUrl && appConfig.supabaseAnonKey
    ? createSupabaseClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey)
    : null;
