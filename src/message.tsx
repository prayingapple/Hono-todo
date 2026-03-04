import type { FC } from 'hono/jsx'

type Props = {
  text: string[];
};

const Message: FC<Props> = (props) => {
  return (
    <ul>
      {props.text.map((message) => {
        return <li className="text-white">{message}!!</li>
      })}
    </ul>
  )
};

export default Message;