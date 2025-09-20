import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/CelebrityDemo/', // Use the repository name for the base path
    define: {
      // Expose the API key from .env as process.env.API_KEY
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY)
    }
  }
});