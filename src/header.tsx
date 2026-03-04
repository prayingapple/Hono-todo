import type { FC } from 'hono/jsx'

type Props = {
  text: string;
};

const Header: FC<Props> = (props) => {
  return (
    <header>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">{props.text}</h2>
          <p class="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">Hojo.js + JSX + TailwindCSS.</p>
        </div>
      </div>
    </header>
  )
};

export default Header;