import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const UserList = () => {
  
  const [user, setUser] = useState([])
  
  useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users").then(Response=>setUser(Response.data))}
  ,[])
  
  
    return (
    <div className='toC'>
      { user.map(u=><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      <Card.Body>
        <Card.Title>{u.name}</Card.Title>
        <Card.Text>
          {u.address.city}
        </Card.Text>
        <Button variant="primary">{u.website}</Button>
      </Card.Body>
    </Card>)}
    
    </div>
  )
}

export default UserList