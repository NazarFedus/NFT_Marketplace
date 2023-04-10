import GettingStartedFooter from "../../../components/gettingStartedFooter/GettingStartedFooter";
import Img from "../../../components/imgGettingStarted/ImgGetStarted";

import img2 from './../img/2.svg'

export default function (){
     return (
          <div className="getstarted__content">
               <Img path={img2}/>
               <GettingStartedFooter
                    title='Start your own NFT gallery now'
                    text='Buy and sell digital items'
                    active={2}></GettingStartedFooter>
          </div>
     );
}