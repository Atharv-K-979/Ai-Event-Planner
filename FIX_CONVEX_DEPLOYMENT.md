# 🔧 Fix Convex Deployment Error

## ❌ Error Found:
```
✖ Environment variable CLERK_JWT_ISSUER_DOMAIN is used in auth config file but its value was not set.
```

## ✅ Solution: Set Environment Variable in Convex Dashboard

### Step 1: Get Your Clerk JWT Issuer Domain

1. Go to **Clerk Dashboard**: https://dashboard.clerk.com/
2. Select your application
3. Go to **JWT Templates** section (in the sidebar)
4. You'll see your JWT Issuer Domain, which looks like:
   ```
   https://your-app.clerk.accounts.dev
   ```
   OR
   ```
   https://clerk.your-app.com
   ```

5. **Copy this full URL** (including `https://`)

### Step 2: Set It in Convex Dashboard

**Option A: Direct Link (Easiest)**
Click this link to go directly to the settings page:
👉 https://dashboard.convex.dev/d/youthful-donkey-358/settings/environment-variables?var=CLERK_JWT_ISSUER_DOMAIN

**Option B: Manual Steps**
1. Go to **Convex Dashboard**: https://dashboard.convex.dev/
2. Select your deployment: **youthful-donkey-358**
3. Go to **Settings** → **Environment Variables**
4. Click **Add Variable**
5. Set:
   - **Name**: `CLERK_JWT_ISSUER_DOMAIN`
   - **Value**: `https://your-app.clerk.accounts.dev` (your actual Clerk issuer domain)
6. Click **Save**

### Step 3: Deploy Convex Again

After setting the environment variable, run:

```bash
cd /home/atharv/Documents/Projects/Ai-Event-Organizer
npx convex deploy --yes
```

This should now work! ✅

---

## 📝 Your Production URLs (for reference):

**Convex Production URL:**
```
https://youthful-donkey-358.convex.cloud
```

**Make sure this is set in Vercel as:**
```
NEXT_PUBLIC_CONVEX_URL=https://youthful-donkey-358.convex.cloud
CONVEX_DEPLOYMENT=youthful-donkey-358
```

---

## 🎯 Complete Checklist:

- [ ] Set `CLERK_JWT_ISSUER_DOMAIN` in Convex Dashboard
- [ ] Deploy Convex: `npx convex deploy --yes`
- [ ] Verify `NEXT_PUBLIC_CONVEX_URL` in Vercel is set to production URL
- [ ] Verify `CONVEX_DEPLOYMENT` in Vercel is set correctly
- [ ] Redeploy on Vercel
- [ ] Test the application

---

## 🔍 If You Don't Know Your Clerk JWT Issuer Domain:

1. Go to Clerk Dashboard
2. Navigate to **JWT Templates**
3. Look for the **Issuer** field - that's your domain
4. It typically looks like: `https://[your-app-name].clerk.accounts.dev`

If you're using a custom domain with Clerk, the issuer might be different. Check your Clerk settings for the exact value.

