# AI Event Organizer 🎉

A full-stack AI-powered event management platform built with Next.js, Convex, Clerk, and Gemini AI.

### Images Of Website
<img width="1470" height="956" alt="Screenshot 2025-11-14 at 12 34 45 AM" src="https://github.com/user-attachments/assets/f7f48cdc-a3bf-40e0-b275-cf690e1bdd48" />
<img width="1470" height="956" alt="Screenshot 2025-11-14 at 12 34 16 AM" src="https://github.com/user-attachments/assets/84f2f663-8d0f-413f-a26f-d3674b5e03c5" />

## 🚀 Deployment Guide

### Prerequisites
- GitHub account (repository: https://github.com/Atharv-K-979/Ai-Event-Planner)
- Vercel account (free tier works)
- Convex account (free tier works)
- Clerk account (free tier works)
- Unsplash API key
- Google Gemini API key

### Step 1: Deploy Convex Backend

1. **Install Convex CLI** (if not already installed):
   ```bash
   npm install -g convex
   ```

2. **Login to Convex**:
   ```bash
   npx convex login
   ```

3. **Initialize Convex in your project**:
   ```bash
   npx convex dev
   ```
   This will:
   - Create a new Convex deployment
   - Generate a `CONVEX_DEPLOYMENT` value
   - Provide you with `NEXT_PUBLIC_CONVEX_URL`

4. **Deploy Convex to production**:
   ```bash
   npx convex deploy --prod
   ```

5. **Get your Convex deployment URL** from the Convex dashboard or the output of the deploy command.

### Step 2: Set Up Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or use existing one
3. Get your keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `CLERK_JWT_ISSUER_DOMAIN` (found in JWT Templates section)

4. **Configure Clerk URLs**:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in redirect: `/explore`
   - After sign-up redirect: `/explore`

### Step 3: Get API Keys

1. **Unsplash API**:
   - Go to [Unsplash Developers](https://unsplash.com/developers)
   - Create a new application
   - Get your `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`

2. **Google Gemini API**:
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Get your `GEMINI_API_KEY`

### Step 4: Deploy to Vercel

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository: `Atharv-K-979/Ai-Event-Planner`
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables in Vercel**:
   Go to Project Settings → Environment Variables and add:
   
   **⚠️ IMPORTANT: Use your ACTUAL keys, NOT placeholders!**
   
   - Go to your Clerk Dashboard → API Keys
   - Copy the **actual** `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (starts with `pk_test_` or `pk_live_`)
   - Copy the **actual** `CLERK_SECRET_KEY` (starts with `sk_test_` or `sk_live_`)
   - Get `CLERK_JWT_ISSUER_DOMAIN` from Clerk Dashboard → JWT Templates (format: `https://your-app.clerk.accounts.dev`)

   Add these variables in Vercel:

   ```
   # Convex
   CONVEX_DEPLOYMENT=your-production-deployment-id
   NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

   # Clerk (⚠️ USE YOUR REAL KEYS FROM CLERK DASHBOARD)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
   CLERK_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   CLERK_JWT_ISSUER_DOMAIN=https://your-app.clerk.accounts.dev

   # APIs
   NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your-unsplash-key
   GEMINI_API_KEY=your-gemini-key
   ```
   
   **Common Error**: If you see `pk_test_xxxxxxxxxxxxxxxxx` in build logs, you're using a placeholder. Replace it with your actual Clerk key!

4. **Update Clerk Allowed Origins**:
   - In Clerk Dashboard → Settings → Domains
   - Add your Vercel domain (e.g., `your-app.vercel.app`)

5. **Deploy**:
   - Click "Deploy" in Vercel
   - Wait for the build to complete
   - Your app will be live! 🎉

### Step 5: Post-Deployment

1. **Update Convex Auth Config** (if needed):
   - Ensure your Convex auth config matches your Clerk setup

2. **Test the deployment**:
   - Visit your Vercel URL
   - Test sign-up/sign-in
   - Create an event
   - Test all features

3. **Set up custom domain** (optional):
   - In Vercel: Settings → Domains
   - Add your custom domain
   - Update Clerk allowed origins with your custom domain

## 🛠️ Local Development

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file with the variables below
```

### Run Development Server

```bash
# Start Convex dev server
npx convex dev

# In another terminal, start Next.js
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file with:

```env
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLERK_JWT_ISSUER_DOMAIN=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

GEMINI_API_KEY=
```

## 📦 Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Backend**: Convex (Database + Serverless Functions)
- **Authentication**: Clerk
- **AI**: Google Gemini 2.0 Flash
- **UI Components**: Shadcn UI, Radix UI
- **Images**: Unsplash API

## 📝 License

This project is private and proprietary.

---

Made with ❤️ by atharvk
