import './styles.css'
export default function ButtonLink({title}: {title: string}){
     return (
          <button className='btn-link'>{title}</button>
     );
}