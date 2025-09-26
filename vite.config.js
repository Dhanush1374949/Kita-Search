import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  dark:'class',
  plugins: [
        tailwindcss(),

    react()],
     
   jsxRuntime: 'automatic',
      // 👇 disable consistent export checks
    consistentComponentsExports: false
})
