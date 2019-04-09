/* eslint-disable no-unused-vars */
import React from 'react'
import { Form } from 'react-bootstrap'
import { useInputState } from './hooks'

const TodoForm = ({ addTodo }) => {
  const { value, reset, onChange } = useInputState()
  return (
    <Form onSubmit={event => {
      event.preventDefault()
      addTodo({ item: value })
      reset()
    }}>
      <Form.Group controlId="formBasic">
        <Form.Control type="text" placeholder="Enter Todo" onChange={onChange} value={value}/>
      </Form.Group>
    </Form>
  )
}

export default TodoForm
