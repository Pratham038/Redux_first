import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {divNumber } from "../actions/index"
const Pika = () => {
    const myState = useSelector((state) =>state.changeTheNumber)
const dispatch = useDispatch();

  return (
    <>
  click me
{myState}

<button onClick={ () => dispatch(divNumber())} >CLICK</button>
  </>
  )
}

export default Pika