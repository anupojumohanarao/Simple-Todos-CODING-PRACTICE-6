import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {deleteInput: initialTodosList}

  deleteUser = id => {
    const {deleteInput} = this.state
    const filterDataUsers = deleteInput.filter(eachUser => eachUser.id !== id)
    this.setState({
      deleteInput: filterDataUsers,
    })
  }

  render() {
    const {deleteInput} = this.state

    return (
      <div className="main-bg-container">
        <div className="main-container">
          <h1 className="main-heading">Simple Todos</h1>
          <ul className="list-container">
            {deleteInput.map(eachUser => (
              <TodoItem
                totalTodosDetails={eachUser}
                deleteUser={this.deleteUser}
                key={eachUser.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
