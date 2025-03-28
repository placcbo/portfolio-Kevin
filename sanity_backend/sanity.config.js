import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'My Studio',
  projectId: 's5k63szh',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [], // We'll add schemas later
  },
  server: {
    hostname: '0.0.0.0', // Critical for Codespaces
    port: 3333
  }
})
