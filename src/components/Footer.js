/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = ({ todos, filterTodos, status }) => {
  return (
    <div className="action-footer">
      <span>{todos.length} items left</span>
      <div className="action">
        <span className={status === 'all' ? 'active' : ''} onClick={() => filterTodos('all')}>All</span>
        <span className={status === 'active' ? 'active' : ''} onClick={() => filterTodos('active')}>Active</span>
        <span className={status === 'completed' ? 'active' : ''} onClick={() => filterTodos('completed')}>Completed</span>
      </div>
    </div>
  )
}

export default Footer
