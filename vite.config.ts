import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
     tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@app": "/src/app",
      "@pages": "/src/pages",
      "@features": "/src/features",
      "@widgets": "/src/widgets",
      "@entities": "/src/entities",
      "@shared": "/src/shared",
      "@styles": "/src/styles",
      "@mocks": "/src/mocks"
    },
  },
})
