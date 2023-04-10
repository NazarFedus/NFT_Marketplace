import Dots from "./dots/Dots";
import "./styles.css"

import { NavLink } from "react-router-dom";

interface IFooter{
     title: string,
     text: string,
     active: number,
}


export default function (props: IFooter){

     return(
          <div className="container">
               <div className="content-wrapper">
                    <h1 className="getstarted-footer__title">{props.title}</h1>
                    <p className="getstarted-footer__text">{props.text}</p>
                    <Dots active={props.active}/>

                    <NavLink to={props.active < 3 ? `/guide/${props.active+1}` : `/start`}>
                         <button className='btn-link' >Next</button>
                    </NavLink>
               </div>
          </div>
     );
}