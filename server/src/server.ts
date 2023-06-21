import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

// alterar depois para a URL do projeto
app.register(cors, {
  origin: true,
})

// aqui será um token gerado pelo backend da nossa aplicação
app.register(jwt, {
  secret: 'z73xnxyefmxmw985609638vnmieyz23g7g23gfnz9n',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server runing on http://localhost:3333')
  })
