# Vercel Deployment Checklist ✅

## Required Environment Variables

Add these in **Vercel Dashboard → Your Project → Settings → Environment Variables**:

### 1. Convex Backend Variables
```
CONVEX_DEPLOYMENT=your-production-deployment-id
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

**How to get:**
- Run `npx convex deploy --prod` in your project
- Copy the deployment URL from the output or Convex dashboard

### 2. Clerk Authentication Variables
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY
CLERK_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=https://your-app.clerk.accounts.dev
```

**How to get:**
- Go to [Clerk Dashboard](https://dashboard.clerk.com/) → Your App → API Keys
- Copy the **actual** keys (not placeholders!)
- Get `CLERK_JWT_ISSUER_DOMAIN` from JWT Templates section

### 3. API Keys
```
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_key
GEMINI_API_KEY=your_gemini_key
```

**How to get:**
- Unsplash: [Unsplash Developers](https://unsplash.com/developers)
- Gemini: [Google AI Studio](https://makersuite.google.com/app/apikey)

## Pre-Deployment Steps

1. ✅ **Test build locally:**
   ```bash
   npm run build
   ```
   If this fails, fix errors before deploying.

2. ✅ **Deploy Convex to production:**
   ```bash
   npx convex deploy --prod
   ```

3. ✅ **Set all environment variables in Vercel** (see above)

4. ✅ **Update Clerk Allowed Origins:**
   - In Clerk Dashboard → Settings → Domains
   - Add your Vercel domain (will be `your-app.vercel.app`)

5. ✅ **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

## Deployment Steps

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project" or import your existing repo
3. Select your GitHub repository: `Atharv-K-979/Ai-Event-Planner`
4. **Add all environment variables** (see list above)
5. Click "Deploy"

## Common Errors & Solutions

### ❌ Build Fails During Installation
- **Solution:** Make sure all dependencies in `package.json` are valid
- Check Node.js version (Next.js 16 requires Node 18+)

### ❌ Build Fails with "Environment variable not found"
- **Solution:** Make sure ALL environment variables listed above are set in Vercel
- Check for typos in variable names
- Ensure variables are set for **Production**, **Preview**, and **Development** environments

### ❌ Runtime Error: "NEXT_PUBLIC_CONVEX_URL is undefined"
- **Solution:** Set `NEXT_PUBLIC_CONVEX_URL` in Vercel environment variables
- Make sure you deployed Convex to production first

### ❌ Clerk Authentication Not Working
- **Solution:** 
  - Verify all Clerk keys are set correctly
  - Add Vercel domain to Clerk allowed origins
  - Check `CLERK_JWT_ISSUER_DOMAIN` matches your Clerk app domain

### ❌ API Routes Return 500 Errors
- **Solution:** Check that `GEMINI_API_KEY` is set (server-side only, not NEXT_PUBLIC)

## After Successful Deployment

1. ✅ Test sign-up/sign-in flow
2. ✅ Test creating an event
3. ✅ Test AI event generation
4. ✅ Test image picker
5. ✅ Update Clerk allowed origins with your final Vercel URL

---

**Need Help?** Check the full deployment guide in `README.md`

