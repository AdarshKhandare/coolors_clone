import { createClient } from "@supabase/supabase-js";

declare global {
  interface Window {
    Clerk: any;
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

function createClerkSupabaseClient() {
  return createClient(supabaseUrl!, supabaseKey!, {
    global: {
      fetch: async (url, options = {}) => {
        const clerkToken = await window.Clerk.domain.session?.getToken({
          template: "supabase",
        });

        const headers = new Headers(options?.headers);
        headers.set("Authorization", `Bearer ${clerkToken}`);

        return fetch(url, { ...options, headers });
      },
    },
  });
}

export const clinet = createClerkSupabaseClient();
