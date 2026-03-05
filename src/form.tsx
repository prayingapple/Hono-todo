import type { FC } from 'hono/jsx'

type Props = {
  text: string;
};

const Form: FC<Props> = (props) => {
  return (
    <form method="post" className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Task</label>
        <input type="text" name="task" placeholder="タスクを入力" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Add</button>
    </form>
  )
};

export default Form;