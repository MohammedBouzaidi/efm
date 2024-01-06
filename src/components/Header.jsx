import React from 'react'
import { Link } from 'react-router-dom'
import ListStagiaire from './stagiaire/ListStagiaire'

const Header = () => {
  return (
    <div>
      <Link to='/'>List des stagiaire</Link>
      <Link to='/add'>Ajouter Stagiaires</Link>
    </div>
  )
}

export default Header