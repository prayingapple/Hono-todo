import type { FC } from 'hono/jsx'

type Props = {
  text: integer;
};

const Footer: FC<Props> = (props) => {
  return (
    <footer>
        <div>@{props.text} Tomo Kimura</div>
    </footer>
  )
};

export default Footer;