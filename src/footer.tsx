import type { FC } from 'hono/jsx'

type Props = {
  text: number;
};

const Footer: FC<Props> = (props) => {
  return (
    <footer className="mt-10 text-white">
      <hr/>
      <p className="mt-4 font-medium text-pretty text-gray-300 sm:text-sm">
        (c) {props.text} Tomo Kimura
      </p>
    </footer>
  )
};

export default Footer;