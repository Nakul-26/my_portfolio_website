const ALLOWED_ORIGIN_REGEX = /^https?:\/\/localhost:\d+$|^https:\/\/nakul-b\.pages\.dev$|^https:\/\/[a-z0-9-]+\.nakul-b\.pages\.dev$/;

function getCorsHeaders(origin) {
  const isAllowed = origin && ALLOWED_ORIGIN_REGEX.test(origin);
  const allowOrigin = isAllowed ? origin : "https://nakul-b.pages.dev";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin");

    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: getCorsHeaders(origin),
      });
    }

    // Verify Origin is allowed to protect against unauthorized website domains using the worker
    if (!origin || !ALLOWED_ORIGIN_REGEX.test(origin)) {
      return new Response(JSON.stringify({ error: "Forbidden: Request origin not allowed" }), {
        status: 403,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://nakul-b.pages.dev",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin,
        },
      });
    }

    try {
      const { name, email, message } = await request.json();

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": origin,
          },
        });
      }

      // Call Resend API
      const resendApiKey = env.RESEND_API_KEY;
      if (!resendApiKey) {
        return new Response(JSON.stringify({ error: "Resend API Key is not configured on the server" }), {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": origin,
          },
        });
      }

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact Form <onboarding@resend.dev>",
          to: "nakul123426@gmail.com",
          reply_to: email,
          subject: `New Message from ${name} via Portfolio`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          `,
        }),
      });

      const responseData = await resendResponse.json();

      if (!resendResponse.ok) {
        console.error("Resend error response:", responseData);
        return new Response(JSON.stringify({ error: responseData.message || "Failed to send email via Resend" }), {
          status: resendResponse.status,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": origin,
          },
        });
      }

      return new Response(JSON.stringify({ success: true, id: responseData.id }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin,
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message || "Internal server error" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin,
        },
      });
    }
  },
};
