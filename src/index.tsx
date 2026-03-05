import { Hono } from 'hono'
import { memo } from 'hono/jsx'
import Message from "./message"
import Header from "./header"
import Footer from "./footer"
import Form from "./form"

const app = new Hono()

const Headers = memo(() => <Header text="Hono-todo" />)
const now = new Date();
const year = now.getFullYear();
const Footers = memo(() => <Footer text={year}/>)

app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html lang="ja">
        <head>
          <meta name='description' content='トップページ' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </head>
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
      <h3 className="m-5 text-white text-3xl font-bold underline">Hello Hono!</h3>
      <h3 className="m-5 text-xl text-white">ようこそ Hono!</h3>
      <Message text={messages}/>
      <Form text="test"/>
    </>
  )
})

app.post('/', (c) => {
  return c.render(
    <>
      <title>保存ページ</title>
      <p className="m-5 text-white text-md">保存しました。ありがとうございます。</p>
      <p className="m-5 text-white text-md"><a href="/">トップページに戻る</a></p>
      <Form text="test"/>
    </>
  )
})

export default app
