import React from 'react'
// import { Button } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


const ButtonCustom = ({label,callback,color}) => {
  return (
    <Button variant={color} onClick={callback}  >{label}</Button>
  )
}

export default ButtonCustom