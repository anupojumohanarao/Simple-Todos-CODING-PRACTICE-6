// Write your code here
import './index.css'

const TodoItem = props => {
  const {totalTodosDetails, deleteUser} = props
  const {id, title} = totalTodosDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="card-container">
      <p className="title">{title}</p>
      <button type="button" className="button-card" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
