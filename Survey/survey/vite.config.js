/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base : './',
    build: {
        cssCodeSplit : false,
        outDir: path.resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                survey: path.resolve(__dirname, 'survey.html'),
            },
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    plugins: [react()]
})
