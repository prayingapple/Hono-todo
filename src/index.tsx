import { Hono } from 'hono'
import type { FC } from 'hono/jsx'

const app = new Hono()

app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html lang="ja">
        <head></head>
        <body>{content}</body>
      </html>
    )
  })
  await next()
})

app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.render(
    <>
      <title>トップページ</title>
      <meta name='description' content='トップページ' />
      <h1>Hello Hono!</h1>
      <h2>ようこそ Hono!</h2>
      <ul>
        {messages.map((message) => {
          return <li>{message}!!</li>
        })}
      </ul>
    </>
  )
})

export default app
