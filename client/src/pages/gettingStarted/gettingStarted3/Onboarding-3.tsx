import GettingStartedFooter from "../../../components/gettingStartedFooter/GettingStartedFooter";
import Img from "../../../components/imgGettingStarted/ImgGetStarted";

import img3 from './../img/3.svg'

export default function (){
     return (
          <div className="getstarted__content">
               <Img path={img3}/>
               <GettingStartedFooter
                    title='Discovering the world of crypto art'
                    text='Buy and sell digital items'
                    active={3}></GettingStartedFooter>
          </div>
     );
}