# Spotify Now Playing Setup

Yes, you'll need to set up Spotify API credentials. Here's how:

## 1. Create Spotify App

1. Go to https://developer.spotify.com/dashboard
2. Log in with your Spotify account
3. Click "Create an App"
4. Fill in:
   - App name: "Personal Blog"
   - App description: "Now playing widget for my personal website"
   - Redirect URI: `http://localhost:3000/api/spotify/callback` (for development)
5. Save and note your **Client ID** and **Client Secret**

## 2. Get Refresh Token

You need a one-time refresh token. Use this quick method:

1. Visit: https://developer.spotify.com/console/get-users-currently-playing-track/
2. Click "Get Token"
3. Check the "user-read-currently-playing" and "user-read-playback-state" scopes
4. Click "Request Token"
5. Copy the access token (this is temporary, we'll get a permanent one)

## 3. Backend API Setup

You'll need a simple backend endpoint. Here are options:

### Option A: Vercel Serverless Function (Recommended)

Create `/api/spotify/now-playing.ts`:

\`\`\`typescript
import { NextApiRequest, NextApiResponse } from 'next';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(\`\${client_id}:\${client_secret}\`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: \`Basic \${basic}\`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: \`Bearer \${access_token}\`,
    },
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist: any) => artist.name).join(', ');
  const albumArt = song.item.album.images[0]?.url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    name: title,
    artist,
    albumArt,
    isPlaying,
    songUrl,
  });
}
\`\`\`

### Option B: Mock Data for Testing

If you want to test without API setup first, modify the component to use mock data:

\`\`\`typescript
// In SpotifyNowPlaying.tsx, replace the fetch with:
setTrack({
  name: "Your Favorite Song",
  artist: "Your Favorite Artist",
  albumArt: "https://via.placeholder.com/150",
  isPlaying: true,
});
\`\`\`

## 4. Environment Variables

Add to your `.env.local`:

\`\`\`
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
\`\`\`

## 5. Get Permanent Refresh Token

To get a permanent refresh token:

1. Use this authorization URL (replace YOUR_CLIENT_ID):
   \`\`\`
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/api/spotify/callback&scope=user-read-currently-playing%20user-read-playback-state
   \`\`\`

2. Visit the URL, authorize, and copy the `code` from the redirect URL

3. Exchange the code for a refresh token:
   \`\`\`bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code" \
     -d "code=YOUR_CODE_HERE" \
     -d "redirect_uri=http://localhost:3000/api/spotify/callback" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET"
   \`\`\`

4. Copy the `refresh_token` from the response

## Notes

- The component auto-hides if nothing is playing or API fails
- Updates every 30 seconds
- Hover to see Spotify link
- All styling matches your night theme
- Component is positioned top-left under the moon

Let me know if you want to use mock data first or set up the real API!
