import { Hono } from 'hono'
import { memo } from 'hono/jsx'
import Message from "./message"
import Header from "./header"
import Footer from "./footer"

const app = new Hono()

const Headers = memo(() => <Header text="Hono-todo" />)
const now = new Date();
const year = now.getFullYear();
const Footers = memo(() => <Footer text={year}/>)

app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html lang="ja">
        <head></head>
        <body>
          <Headers />
          {content}
          <Footers />
        </body>
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
      <Message text={messages}/>
    </>
  )
})

export default app
