import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

// CORS configuration - allow your GitHub Pages domain
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://x23756575.github.io',
    'https://sammeh.me'
  ],
  credentials: true
}));

app.use(express.json());

// Spotify API credentials from environment variables
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

let accessToken = '';
let tokenExpiry = 0;

// Get Spotify access token
async function getAccessToken() {
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN!,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        },
      }
    );

    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + (response.data.expires_in - 300) * 1000;
    return accessToken;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

// Get currently playing track
app.get('/api/now-playing', async (req, res) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 204 || !response.data) {
      return res.json({ isPlaying: false });
    }

    const { item, is_playing } = response.data;

    res.json({
      isPlaying: is_playing,
      title: item.name,
      artist: item.artists.map((artist: any) => artist.name).join(', '),
      album: item.album.name,
      albumImageUrl: item.album.images[0]?.url,
      songUrl: item.external_urls.spotify,
      duration: item.duration_ms,
      progress: response.data.progress_ms,
    });
  } catch (error: any) {
    console.error('Error fetching now playing:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch currently playing track' });
  }
});

// Export for Vercel serverless
export default app;
