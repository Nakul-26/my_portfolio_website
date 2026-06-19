# Portfolio Email Worker

This is a lightweight Cloudflare Worker that acts as a secure backend proxy to send emails from your portfolio website using the [Resend API](https://resend.com).

This prevents your `RESEND_API_KEY` from being exposed to the public browser client.

## Setup & Deployment

### Prerequisites
Make sure you have Node.js and npm installed.

### 1. Install Wrangler
Wrangler is the Cloudflare Workers CLI. You can install it globally or run it via `npx`:
```bash
npm install -g wrangler
```

### 2. Local Development
To test the worker locally, run the following command inside this directory:
```bash
npx wrangler dev
```
It will spin up a local server on `http://127.0.0.1:8787`. The worker will load the `RESEND_API_KEY` from the `.dev.vars` file.

### 3. Deploy to Cloudflare Workers
To deploy your worker to production:
1. Log in to your Cloudflare account from the CLI:
   ```bash
   npx wrangler login
   ```
2. Deploy the worker:
   ```bash
   npx wrangler deploy
   ```
3. Set your production Resend API Key inside Cloudflare dashboard or via CLI:
   ```bash
   npx wrangler secret put RESEND_API_KEY
   ```
   Paste your Resend API Key (`re_your_api_key`) when prompted.

### 4. Connect Your React Frontend
Once deployed, copy your worker's live URL (e.g. `https://portfolio-email-worker.your-username.workers.dev`) and add it to your React portfolio's `.env` file:
```env
VITE_WORKER_API_URL=https://portfolio-email-worker.your-username.workers.dev
```
If this variable is not defined, the React app defaults to `http://127.0.0.1:8787` for local testing.
