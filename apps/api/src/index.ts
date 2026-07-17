import { app } from "./app"

const port = Number(process.env.PORT ?? 3001)

app.listen(port)

console.log(
  `🦕 dino-blog-stack-test api http://localhost:${port} · /health`,
)
