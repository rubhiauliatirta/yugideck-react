import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { useRedux } from 'hooks'

export default function PrivateRoute({ children, ...rest }){ //kalo di docs {children, ...rest} rest ini sisa props
  const { user } = useRedux()
  return (
    <Route 
      {...rest}
      render={()=> user.data ? children : <Redirect to="/auth"></Redirect> } />
  )
}

