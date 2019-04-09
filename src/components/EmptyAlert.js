/* eslint-disable no-unused-vars */
import React from 'react'
import { Alert } from 'react-bootstrap'

const EmptyAlert = () => {
  return (
    <Alert dismissible variant="warning">
      <Alert.Heading>Empty warning</Alert.Heading>
      <p>
        there is no todo item existed.
      </p>
    </Alert>
  )
}

export default EmptyAlert
