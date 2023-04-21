import { useSelector,useDispatch } from "react-redux";
import {incNumber,decNumber } from "./actions/index"
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
   <div className="outer" style={pok}>
    <div className="inner">
      <button onClick={ () => dispatch(incNumber())} className="inc">+</button>
      <input type="text" value={myState} contentEditable="false" />
      <button className="dec" onClick={ () => dispatch(decNumber())}>-</button>

    </div>
   </div>
   </>
  );
}

export default App;
