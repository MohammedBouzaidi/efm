import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AjouterStagiaire } from '../../redux/StagiaireSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

export default function AddStagiaire () {
  const [image, setImage] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [filliere, setFilliere] = useState('');

  const dispatch=useDispatch();
  const navigate=useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AjouterStagiaire({image,nom,prenom,filliere}))
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <Header/>
        <label>Lien de l'image :</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div>
        <label>Prénom :</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>
      <div>
        <label>Filière :</label>
        <input
          type="text"
          value={filliere}
          onChange={(e) => setFilliere(e.target.value)}
        />
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
};

