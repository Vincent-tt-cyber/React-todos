import { ChevronDown, Plus } from "lucide-react";
import ChildTodo from "../ChildTodo/ChildTodo";
import styles from "./ParentTodo.module.scss"
import { useState } from "react";

const ParentTodo = ({ todoItem }) => {
	const [isOpenChilds, setIsOpenChilds] = useState(false)
	return (
		<div className={styles['parent-todo']}>
			<div className={styles['parent-todo__header']}>
				<div className={styles['parent-todo__title']}>
					<input type="checkbox" />
					<h3>{todoItem.title}</h3>
				</div>
				<button onClick={() => setIsOpenChilds(!isOpenChilds)} >
					<ChevronDown size={20} strokeWidth={3} />
				</button>
			</div>
			<ul className={isOpenChilds ? styles['child-todos-open'] : styles['child-todos-closed']}>
				{
					todoItem.childs.map((item) => <ChildTodo key={item.id} childTodoItem={item} />)
				}
			</ul>
		</div>
	)
}

export default ParentTodo