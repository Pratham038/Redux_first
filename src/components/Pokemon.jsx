import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {mulNumber } from "../actions/index"
import { NavLink } from 'react-router-dom';
const Pokemon = () => {
  const myState = useSelector((state) =>state.changeTheNumber)
const dispatch = useDispatch();

  return (<>
  click me
{myState}
<NavLink to='/pika'>TAKE TO PIKA</NavLink>
<button onClick={ () => dispatch(mulNumber())} >CLICK</button>
  </>
  )
}

export default Pokemon