import GettingStartedFooter from "../../components/gettingStartedFooter/GettingStartedFooter";
import Img from "../../components/imgGettingStarted/ImgGetStarted";

import img1 from './/img/1.svg'

export default function (){
     return (
          <div className="getstarted__content">
               <Img path={img1}/>
               <GettingStartedFooter
                    title='Discover largest NFT marketplace'
                    text='Buy and sell digital items'
                    active={1}></GettingStartedFooter>
          </div>
     );
}