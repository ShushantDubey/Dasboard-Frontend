import React from 'react'
import { logout } from '../firebase'

const Signout = () => {
  return (
    <div>
    {logout()}
    </div>
  )
}

export default Signout;