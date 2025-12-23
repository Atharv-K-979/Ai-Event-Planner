# 🚨 URGENT: Fix Vercel Environment Variables

## ❌ Current Error:
Your Vercel deployment is still using the **OLD Convex deployment URL**!

The error `Could not find public function for 'users: getCurrentUser'` means Vercel is pointing to the wrong Convex backend.

---

## ✅ IMMEDIATE FIX REQUIRED:

### Step 1: Update Vercel Environment Variables

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: `ai-event-planner-26h4` (or your project name)
3. **Go to**: Settings → Environment Variables
4. **Update/Create these variables:**

```bash
# ✅ MUST BE SET TO PRODUCTION VALUES:

NEXT_PUBLIC_CONVEX_URL=https://youthful-donkey-358.convex.cloud
CONVEX_DEPLOYMENT=youthful-donkey-358
CLERK_JWT_ISSUER_DOMAIN=https://sought-mantis-67.clerk.accounts.dev
```

5. **Make sure environment is set to**: Production, Preview, AND Development (or at least Production)

6. **Click "Save"** on each variable

---

### Step 2: Also Check These Clerk Variables

Verify these are set correctly:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_... (or pk_test_... if dev)
CLERK_SECRET_KEY=sk_live_... (or sk_test_... if dev)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

**⚠️ Important**: If using production, keys should start with `pk_live_` and `sk_live_`

---

### Step 3: CRITICAL - Redeploy After Updating Variables

**After updating environment variables, you MUST redeploy:**

**Option A: Automatic Redeploy (Recommended)**
1. In Vercel Dashboard → Settings → Environment Variables
2. After saving variables, look for **"Redeploy" button** or **"Redeploy All"** option
3. Click it to trigger a new deployment

**Option B: Manual Redeploy**
1. Go to **Deployments** tab in Vercel
2. Click the **"..."** (three dots) on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete (2-3 minutes)

**Option C: Trigger via Git**
```bash
git commit --allow-empty -m "Trigger Vercel redeploy with updated env vars"
git push origin main
```

---

### Step 4: Verify Deployment

1. Wait for deployment to complete (check Vercel dashboard)
2. Visit your site: `ai-event-planner-26h4.vercel.app`
3. Open browser console (F12)
4. Should NOT see:
   - ❌ "Could not find public function for 'users: getCurrentUser'"
   - ❌ Convex errors

---

## 🔍 How to Check Current Values in Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Look for `NEXT_PUBLIC_CONVEX_URL`
3. If it says something like:
   - ❌ `https://joyous-snail-190.convex.cloud` (OLD DEV URL)
   - ❌ `https://something-else.convex.cloud` (WRONG)
   - ✅ `https://youthful-donkey-358.convex.cloud` (CORRECT - this is what it should be!)

---

## 📝 Quick Checklist:

- [ ] Updated `NEXT_PUBLIC_CONVEX_URL` to `https://youthful-donkey-358.convex.cloud` in Vercel
- [ ] Updated `CONVEX_DEPLOYMENT` to `youthful-donkey-358` in Vercel
- [ ] Updated `CLERK_JWT_ISSUER_DOMAIN` to `https://sought-mantis-67.clerk.accounts.dev` in Vercel
- [ ] Verified Clerk keys are set correctly
- [ ] **REDEPLOYED** on Vercel (most important!)
- [ ] Tested the site - no errors in console

---

## 🎯 The Key Issue:

**Vercel is using cached environment variables from the OLD deployment!**

Even though we deployed Convex successfully, Vercel is still running with the old configuration. You MUST:
1. ✅ Update the variables
2. ✅ **REDEPLOY** (this is critical - just updating variables isn't enough!)

---

**Once you redeploy with the correct variables, the error will be fixed! 🚀**

