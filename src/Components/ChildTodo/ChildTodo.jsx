import styles from "./ChildTodo.module.scss";

const ChildTodo = ({ childTodoItem }) => {
	return (
		<li className={styles['child-todo']} >
			<div className={styles['child-todo__title']} >
				<input type="checkbox" />
				<h4>
					{childTodoItem.title}
				</h4>
			</div>
		</li>
	)
}

export default ChildTodo