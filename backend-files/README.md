# Vercel Backend Setup Instructions

## Files needed in your backend repository:

1. **vercel.json** - Routes configuration
2. **index.ts** - Your Express app
3. **package.json** - Dependencies

## Steps:

1. In your backend repo, add these files
2. Make sure `package.json` has:
   ```json
   {
     "dependencies": {
       "express": "^4.18.2",
       "cors": "^2.8.5",
       "axios": "^1.6.0"
     }
   }
   ```

3. Push to GitHub
4. Vercel will auto-redeploy
5. Environment variables should already be set in Vercel dashboard

## Important:
- The CORS origins include `https://sammeh.me` (your custom domain)
- The route `/api/now-playing` will work correctly
- Vercel will handle the serverless function execution

Your backend files are ready in `/home/sam-o-reilly/sblog/backend-files/`
