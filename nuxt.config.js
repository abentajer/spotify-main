export default {
  ssr: false, // Ensure SSR is enabled
  target: 'static',//target: 'server',
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxt/postcss8', '@nuxtjs/toast'],

  axios: {
    baseURL: 'https://api.spotify.com/v1', // API Spotify
  },
  css: [
    // Inclure Tailwind CSS
    '@/assets/css/tailwind.css',
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  head: {
    // ... autres options ...
    link: [
      // ... autres liens ...
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000
  },

  auth: {
    strategies: {
      spotify: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.spotify.com/authorize',
          token: 'https://accounts.spotify.com/api/token',
          userInfo: 'https://api.spotify.com/v1/me',
        },
        clientId: 'cd0a66c293314bce91e0810930117a0f',
        clientSecret: 'e5f05c8775f44f9f8fce13dcd499ea74',
        scope: [
          'user-read-private',
          'user-read-email',
          'playlist-read-private',
          'playlist-modify-public',
          'playlist-modify-private',
          'user-library-read',
          'user-library-modify',
          'user-read-playback-state',
          'user-modify-playback-state',
          'streaming',
          'user-read-currently-playing',
          'user-read-recently-played',
          'user-top-read',
          'user-follow-read'
        ],
        grantType: 'authorization_code',
        responseType: 'code',
        redirectUri: 'https://2ed0-41-137-204-13.ngrok-free.app/callback',
      },
    },
  },

  toast: {
    position: 'top-right',
    duration: 3000,
    keepOnHover: true,
  },
};
