import { useState } from "react"
import ParentTodo from "./Components/ParentTodo/ParentTodo"
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm"

function App() {

  const [todosData, setTodosData] = useState([{
    id: 1,
    title: "Сделать приложение: Список задач",
    completed: false,
    childs: [
      {
        id: new Date(),
        title: "Добавить роутинг",
        completed: false,
      },
      {
        id: new Date(),
        title: "Добавить удаление задач",
        completed: false,
      },
      {
        id: new Date(),
        title: "Добавление задач",
        completed: false,
      }
    ]
  }])

  return (
    <>
      <div className="container">
        <AddTodoForm />
        <div>
          {
            todosData.map((item) => <ParentTodo key={item.id} todoItem={item} />)
          }
        </div>
      </div>
    </>
  )
}

export default App
