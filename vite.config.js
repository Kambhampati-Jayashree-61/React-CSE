import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"React-CSE/",
  plugins:[
    react({
    babel:{
      plugins:[['babel-plugin-compiler']]
    }
  })
]
})