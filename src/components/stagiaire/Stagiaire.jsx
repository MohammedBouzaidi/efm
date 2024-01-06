import './stagiaire.css'
import { Link } from 'react-router-dom'

const Stagiaire = ({nom,prenom,image,filliere}) => {
  return (
    <div>
        <Link to={`/${nom}`}><img src={image} /></Link>
        <p>{nom}</p>
        <h1>{prenom}</h1>
        <p>{filliere}</p>
    </div>
  )
}

export default Stagiaire