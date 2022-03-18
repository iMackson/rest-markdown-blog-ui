import React from 'react'
import { Message } from 'semantic-ui-react'

export default ({ message, info, positive, warning, negative }) => (
  <Message 
    compact 
    negative={negative} 
    positive={positive} 
    info={info} 
    warning={warning}>
    { message }
  </Message>
)