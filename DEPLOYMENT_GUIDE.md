# Vercel Deployment Guide for Spotify Backend

## 1. Prepare Your Backend for Vercel

Create a `vercel.json` file in your backend project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/index.ts"
    }
  ]
}
```

## 2. Update CORS for Production

Modify your CORS settings to allow your GitHub Pages domain:

```typescript
app.use(cors({
  origin: [
    'http://localhost:5173', // local development
    'https://samoreilly.github.io' // your GitHub Pages domain
  ],
  credentials: true
}));
```

## 3. Deploy to Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. Deploy via Vercel Dashboard (easier):
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Add New" → "Project"
   - Import your backend repository
   - Vercel will auto-detect it as a Node.js project

3. Or deploy via CLI:
   ```bash
   cd your-backend-folder
   vercel
   ```

## 4. Set Environment Variables on Vercel

In your Vercel project dashboard:
1. Go to "Settings" → "Environment Variables"
2. Add these variables:
   - `SPOTIFY_CLIENT_ID` → your client ID
   - `SPOTIFY_CLIENT_SECRET` → your client secret
   - `SPOTIFY_REFRESH_TOKEN` → your refresh token
   - `PORT` → 3001 (optional, Vercel handles this)

## 5. Update Frontend .env.production

After deployment, Vercel gives you a URL like: `https://your-app-name.vercel.app`

Update `/home/sam-o-reilly/sblog/.env.production`:
```
VITE_SPOTIFY_API_URL=https://your-app-name.vercel.app
```

## 6. GitHub Pages Deployment

For your frontend, update `vite.config.ts` to set the base path:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BlogNThat/', // your repo name
})
```

## 7. Add GitHub Actions for Auto-Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        env:
          VITE_SPOTIFY_API_URL: ${{ secrets.VITE_SPOTIFY_API_URL }}
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 8. Add GitHub Secret

1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `VITE_SPOTIFY_API_URL`
4. Value: `https://your-app-name.vercel.app`

## 9. Update Spotify Redirect URIs

In your Spotify Developer Dashboard:
1. Go to your app settings
2. Add these redirect URIs:
   - `https://your-app-name.vercel.app/callback` (if needed)
   - Keep your localhost URI for development

## Notes

- Vercel free tier includes:
  - 100 GB bandwidth/month
  - Serverless functions with reasonable limits
  - Automatic HTTPS
  - Perfect for this use case!

- GitHub Pages is free for public repos
- Both services auto-deploy on push

## Testing

1. Deploy backend to Vercel first
2. Get the Vercel URL
3. Update `.env.production` with Vercel URL
4. Push to GitHub (GitHub Actions will deploy)
5. Visit your GitHub Pages site

Your site will be live at: `https://samoreilly.github.io/BlogNThat/`
