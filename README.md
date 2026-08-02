# 🧬 CRANE | Dennett Labs

Welcome to the **CRANE Landing Page** repository for [Dennett Labs](https://dennettlabs.com).

CRANE (Candidate Ranking for Adaptive Novel Enzymes) is our flagship physics-informed AI platform designed for industrial biotechnology. This repository houses the public-facing landing page and the integrated waitlist system.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Database**: Supabase (Waitlist storage)
- **Email Service**: Resend (Automated confirmation emails)
- **Deployment**: Vercel

## ⚙️ Environment Variables

To run the project locally, you will need to create a `.env.local` file at the root of the project with the following keys:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Resend
RESEND_API_KEY=your_resend_api_key
```

*Note: We use the `SUPABASE_SERVICE_ROLE_KEY` to securely perform server-side database insertions in our API routes, bypassing the need for Row Level Security (RLS) policies for anonymous users.*

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📬 Waitlist Architecture

The waitlist form on the site is wired to a custom Next.js API route (`/api/waitlist`). When a user submits their information:
1. The user's name and email are securely inserted into the Supabase `waitlist` table.
2. If the insertion is successful, Resend automatically triggers a styled, branded welcome email from `noreply@mail.dennettlabs.com` to the user.
3. The frontend UI features a deliberate artificial loading delay (3.5s) to provide a premium "heavy lifting" aesthetic before displaying the success state.

## 🔗 Live Site
[https://dennettlabs.com](https://dennettlabs.com)
