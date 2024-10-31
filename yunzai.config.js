import { defineConfig } from 'yunzaijs'
export default defineConfig({
  applications: ['@yunzaijs/system'],
  middlewares: ['@yunzaijs/mys/runtime', '@yunzaijs/mys/message']
})
