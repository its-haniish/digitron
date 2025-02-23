import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  port: 8085, // Ensure this is your desired port
  host: true,  // Allows external access
  allowedHosts: ['digitron.rocks'], // Add your domain here
  plugins: [react(), tailwindcss()],
});

