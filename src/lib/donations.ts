const SUPABASE_URL = "https://jywkfpbxnvnjjhivrhox.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5d2tmcGJ4bnZuampoaXZyaG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxOTA4NDEsImV4cCI6MjA3MDc2Njg0MX0.b_HAGufdknCHabfw4w0PzekWAg5EgmCX22--1OEMis8";

export async function createLandingDonation(params: {
  email: string;
  amount: number; // cents
  frequency: "monthly" | "one_time";
  tierName?: string;
}): Promise<{ url: string } | { error: string }> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/functions/v1/create-landing-donation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify(params),
      }
    );

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      return { error: body?.error ?? `Request failed (${res.status})` };
    }

    const data = await res.json();
    if (data?.url) return { url: data.url };
    return { error: data?.error ?? "No checkout URL returned" };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Network error" };
  }
}
