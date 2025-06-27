import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/inspiroo-logistik-site/', // Замените на имя вашего репозитория
});