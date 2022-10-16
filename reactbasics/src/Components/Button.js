// const Button = (props) => (
//     <button onClick={props.handleClick} className="btn btn-primary">{props.title}</button>
// );

const Button =({handleClick,title})=>(
    <button onClick={handleClick} className="btn btn-success">{title}</button>
);
export default Button;

//if we use export const Button then we have to use 
//import {Button} from "./components/Button"; as button destructured 
//in this case we will just use = import {Button} from "./components/Button";
//use () beackets for function defination