import './styles.css'
export default function Dots({active = 1}: {active: number}){

     return(
          <div className="dots-container">
               <div className={active === 1 ? 'active' : 'dot' }></div>
               <div className={active === 2 ? 'active' : 'dot' }></div>
               <div className={active === 3 ? 'active' : 'dot' }></div>
          </div>
     );
}