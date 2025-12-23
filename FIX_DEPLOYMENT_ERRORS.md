# 🔧 Fix Deployment Errors - Step by Step Guide

## 🚨 Current Errors:

1. **Convex Error**: `Could not find public function for 'users:getCurrentUser'`
   - **Cause**: Convex functions haven't been deployed to production

2. **Clerk Warning**: Development keys being used in production
   - **Cause**: Using test keys instead of production keys

---

## ✅ Step 1: Deploy Convex to Production

### Option A: Deploy from Local Machine (Recommended)

1. **Make sure you're in the project directory:**
   ```bash
   cd /home/atharv/Documents/Projects/Ai-Event-Organizer
   ```

2. **Login to Convex (if not already logged in):**
   ```bash
   npx convex login
   ```

3. **Deploy Convex functions to production:**
   ```bash
   npx convex deploy --yes
   ```
   
   **Note**: In newer Convex versions, use `--yes` to skip confirmation prompt. Production is the default.

4. **IMPORTANT: Before deploying, set this environment variable in Convex Dashboard:**
   - Variable name: `CLERK_JWT_ISSUER_DOMAIN`
   - Value: Your Clerk JWT issuer domain (from Clerk Dashboard → JWT Templates)
   - Go to: https://dashboard.convex.dev/d/youthful-donkey-358/settings/environment-variables
   
5. **After deployment, you'll see output like:**
   ```
   Deploying to https://youthful-donkey-358.convex.cloud...
   ✓ Deployment complete!
   ```

5. **Copy the production URL** - you'll need this for Vercel!

### Option B: Check if Convex is Already Deployed

If you have a Convex dashboard, check:
- Go to https://dashboard.convex.dev
- Find your project
- Check if functions are deployed
- Copy the production deployment URL

---

## ✅ Step 2: Get Your Production Environment Variables

### A. Update Convex Variables in Vercel

After deploying Convex, update these in **Vercel → Settings → Environment Variables**:

```
CONVEX_DEPLOYMENT=your-production-deployment-id
NEXT_PUBLIC_CONVEX_URL=https://your-production-deployment.convex.cloud
```

**⚠️ Important**: Use the **production** deployment URL, not the dev URL!

---

### B. Fix Clerk Keys (Use Production Keys)

The error shows you're using **development keys**. You need **production keys**:

1. **Go to Clerk Dashboard**: https://dashboard.clerk.com/

2. **Switch to Production Environment:**
   - Look for an environment switcher (usually top-right)
   - Switch from "Development" to "Production"
   - Or create a production instance if you haven't

3. **Get Production Keys:**
   - Go to **API Keys** section
   - Copy the **Production** publishable key (starts with `pk_live_...`)
   - Copy the **Production** secret key (starts with `sk_live_...`)

4. **Get Production JWT Issuer Domain:**
   - Go to **JWT Templates** section
   - Copy the issuer domain (should be `https://your-app.clerk.accounts.dev` or similar)

5. **Update Vercel Environment Variables:**
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_YOUR_PRODUCTION_KEY
   CLERK_SECRET_KEY=sk_live_YOUR_PRODUCTION_SECRET
   CLERK_JWT_ISSUER_DOMAIN=https://your-app.clerk.accounts.dev
   ```

---

## ✅ Step 3: Update All Environment Variables in Vercel

Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**

### Complete List of Required Variables:

```bash
# Convex (Production - get from Step 1)
CONVEX_DEPLOYMENT=your-production-deployment-id
NEXT_PUBLIC_CONVEX_URL=https://your-production-deployment.convex.cloud

# Clerk (Production - get from Step 2B)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_YOUR_ACTUAL_KEY
CLERK_SECRET_KEY=sk_live_YOUR_ACTUAL_SECRET
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=https://your-app.clerk.accounts.dev

# APIs
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_key
GEMINI_API_KEY=your_gemini_key
```

### ⚠️ Important Checklist:

- [ ] All keys are **production** keys (not test/dev)
- [ ] Clerk keys start with `pk_live_` and `sk_live_` (not `pk_test_` or `sk_test_`)
- [ ] Convex URL is the **production** deployment URL
- [ ] All variables are set for **Production**, **Preview**, and **Development** environments (or at least Production)

---

## ✅ Step 4: Update Clerk Allowed Origins

1. **Go to Clerk Dashboard**: https://dashboard.clerk.com/
2. **Navigate to**: Settings → Domains
3. **Add your Vercel domain(s)**:
   - `your-app.vercel.app` (production)
   - `your-app-*.vercel.app` (preview deployments)
   - Any custom domain you're using

---

## ✅ Step 5: Redeploy on Vercel

After updating environment variables:

1. **Option A: Automatic Redeploy**
   - Push any commit to trigger a new deployment
   ```bash
   git commit --allow-empty -m "Trigger redeploy"
   git push origin main
   ```

2. **Option B: Manual Redeploy**
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click "Redeploy" on the latest deployment
   - Or go to Settings → Environment Variables → Redeploy

3. **Wait for deployment to complete**
   - Check the build logs
   - Ensure no errors during build

---

## ✅ Step 6: Verify Everything Works

After redeployment:

1. **Visit your Vercel URL**
2. **Check the browser console** (F12 → Console tab)
   - Should NOT see Clerk development warning
   - Should NOT see Convex function errors
3. **Test these features:**
   - ✅ Sign up / Sign in
   - ✅ Create an event
   - ✅ Browse events
   - ✅ View dashboard

---

## 🐛 Troubleshooting

### Still Getting Convex Error?

**Problem**: `Could not find public function for 'users:getCurrentUser'`

**Solutions**:
1. **First, set `CLERK_JWT_ISSUER_DOMAIN` in Convex Dashboard** (required!)
   - Go to: https://dashboard.convex.dev/d/youthful-donkey-358/settings/environment-variables
   - Add: `CLERK_JWT_ISSUER_DOMAIN` = `https://your-app.clerk.accounts.dev`

2. Verify Convex deployment succeeded:
   ```bash
   npx convex deploy --yes
   ```
   Should say "Deployment complete!"

2. Verify `NEXT_PUBLIC_CONVEX_URL` in Vercel matches your production URL:
   - Should be `https://something.convex.cloud`
   - Should NOT be a dev URL

3. Clear Vercel cache and redeploy:
   - Vercel Dashboard → Settings → Clear Build Cache
   - Redeploy

---

### Still Getting Clerk Development Warning?

**Problem**: "Clerk has been loaded with development keys"

**Solutions**:
1. Verify you're using production keys:
   - Keys should start with `pk_live_` and `sk_live_`
   - NOT `pk_test_` or `sk_test_`

2. Make sure Clerk environment is set to "Production" in Clerk dashboard

3. Verify environment variables in Vercel:
   - Double-check the values are correct
   - Make sure there are no extra spaces

---

### Functions Work Locally But Not in Production?

1. **Check Convex deployment status:**
   ```bash
   npx convex deploy --prod
   ```

2. **Verify production URL:**
   - Check Convex dashboard
   - Make sure Vercel uses the production URL, not dev URL

---

## 📞 Need More Help?

If issues persist:

1. Check Vercel build logs for errors
2. Check browser console for specific error messages
3. Verify all environment variables are set correctly
4. Make sure Convex production deployment is active

---

## ✅ Quick Checklist Summary

- [ ] Deployed Convex to production (`npx convex deploy --prod`)
- [ ] Updated `NEXT_PUBLIC_CONVEX_URL` in Vercel with production URL
- [ ] Switched Clerk to production environment
- [ ] Updated Clerk keys in Vercel (using `pk_live_` and `sk_live_`)
- [ ] Updated all environment variables in Vercel
- [ ] Added Vercel domain to Clerk allowed origins
- [ ] Redeployed on Vercel
- [ ] Tested the application - no errors in console

---

**Once all steps are complete, your deployment should work! 🎉**

