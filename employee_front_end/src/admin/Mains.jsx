import React from 'react'
import AdminNavbar from './AdminNavbar'

const Mains = (props) => {
  return (
    <div>
      <AdminNavbar/>
      {props.child}
    </div>
  )
}

export default Mains
