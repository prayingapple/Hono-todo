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
        <body className="m-10 bg-sky-950">
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      <h3 className="m-5 text-white text-3xl font-bold underline">Hello Hono!</h3>
      <h3 className="m-5 text-xl text-white">ようこそ Hono!</h3>
      <Message text={messages}/>
    </>
  )
})

export default app
