import type { FC } from 'hono/jsx'

type Props = {
  text: string;
};

const Header: FC<Props> = (props) => {
  return (
    <header>
        <div>{props.text}</div>
        <div>menu</div>
    </header>
  )
};

export default Header;