// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "/dhia-portfolio",
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolioPerso/", // Ajoute cette ligne (nom de ton dépôt GitHub)
})