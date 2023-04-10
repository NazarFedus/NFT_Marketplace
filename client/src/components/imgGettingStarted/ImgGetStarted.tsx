import './styles.css'
export default function Img({path}: {path: string}){
     return (
          <div className="wrapper">
               <img src={path}/>
          </div>
     );
}