import * as process from 'node:process'

export const apiEnv = {
  isProd: process.env.THA_ENV === 'production',
  api: {
    port: Number(process.env.API_PORT)
  },
  db: {
    url: process.env.DATABASE_URL
  }
}