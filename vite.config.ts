import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]

  //    if(command === 'serve') {
  //   return {
  //     // dev specific config
  //   }
  // } else {
  //   // command === 'build'
  //   return {
  //     // build specific config
  //   }
  // }
})

