
const initialState=10;
const changeTheNumber =(state=initialState,action)=>{
switch (action.type) {
    case "INCREMENT": return state + 2 ;
    
    case "DECREMENT": return state -2 ;

    case "MULTIPLY": return state *2;

    case "DIVIDE": return state /2;

    default:
        return state ;
}
}
export default changeTheNumber;