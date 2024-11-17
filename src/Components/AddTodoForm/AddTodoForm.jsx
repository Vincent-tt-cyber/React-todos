import styles from './AddTodoForm.module.scss'

const AddTodoForm = () => {
	return (
		<form className={styles['form']}>
			<input type="text" placeholder='Введите название задачи' />
			<button>Добавить</button>
		</form>
	)
}

export default AddTodoForm