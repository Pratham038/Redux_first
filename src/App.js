import { useSelector,useDispatch } from "react-redux";
import {incNumber,decNumber } from "./actions/index"
import { NavLink, Routes,Route } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import Pika from "./components/Pika";
function App() {

const myState = useSelector((state) =>state.changeTheNumber)
const dispatch = useDispatch();

const pok = {display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh"
}
  return (
   <>
   <Routes>
      <Route path="/pokemon" element={<Pokemon/>} />
      <Route path="/pika" element={<Pika/>} />

    </Routes>
   <div className="outer" style={pok}>
    <div className="inner">
      <button onClick={ () => dispatch(incNumber())} className="inc">+</button>
      <input type="text" value={myState} contentEditable="false" />
      <button className="dec" onClick={ () => dispatch(decNumber())}>-</button>
<NavLink to="/pokemon"> <button>
  HELP</button></NavLink>
    </div>
   </div>

   <div>
    
   </div>
   </>
  );
}

export default App;
