# ⚠️ CRITICAL: Set These in Vercel Dashboard

## 🔴 IMPORTANT:
`.env.local` file is **ONLY for local development**.  
**Vercel does NOT use `.env.local` file!**

You **MUST** set these in **Vercel Dashboard** for your deployed site to work!

---

## 📋 Copy These Exact Values to Vercel:

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

### 1. Convex Variables (Production):
```
CONVEX_DEPLOYMENT=youthful-donkey-358
NEXT_PUBLIC_CONVEX_URL=https://youthful-donkey-358.convex.cloud
```

### 2. Clerk Variables:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cG93ZXJmdWwtY29kLTUuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_mXOE8W1cqvlbgfqhR7CMyu6JyDXTCfKkknMJeCD015
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=https://sought-mantis-67.clerk.accounts.dev
```

### 3. API Keys:
```
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=XZsw2ocRSPBPQCEkrD4I9nsMvNesV2BrDOrOxu_RJdU
GEMINI_API_KEY=AIzaSyD6QjAoT7znvgAajfNvml4aiR7geBr-bwU
```

---

## ✅ After Adding Variables in Vercel:

1. **Make sure environment is set to**: Production (and Preview/Development if needed)
2. **Click "Save"** on each variable
3. **REDEPLOY** your Vercel project:
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"

---

## 🎯 Quick Steps:

1. ✅ Copy values above
2. ✅ Paste into Vercel Dashboard → Environment Variables
3. ✅ Save all variables
4. ✅ **REDEPLOY** (critical!)
5. ✅ Test your site

**Your site will NOT work until you set these in Vercel Dashboard!**





