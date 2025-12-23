# 🚀 Quick Deploy Instructions

## Your Clerk JWT Issuer Domain:
```
https://sought-mantis-67.clerk.accounts.dev
```

## Step 1: Set in Convex Dashboard

👉 **Click here**: https://dashboard.convex.dev/d/youthful-donkey-358/settings/environment-variables

- **Variable Name**: `CLERK_JWT_ISSUER_DOMAIN`
- **Variable Value**: `https://sought-mantis-67.clerk.accounts.dev`

Click **Save**

## Step 2: After saving, run:
```bash
npx convex deploy --yes
```

## Step 3: Also set in Vercel

Make sure in **Vercel Dashboard → Environment Variables**, you have:
```
CLERK_JWT_ISSUER_DOMAIN=https://sought-mantis-67.clerk.accounts.dev
```

