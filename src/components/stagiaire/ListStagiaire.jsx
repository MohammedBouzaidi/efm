import React from "react";
import { useSelector } from "react-redux";
import Stagiaire from "./Stagiaire";
import Header from "../Header";

const ListStagiaire = () => {
  const stagiaires = useSelector((store) => store.stagiaire);

  return (
    <div>
      <Header/>
      {stagiaires.map((stagiaire) => (
        <Stagiaire
          image={stagiaire.image}
          nom={stagiaire.nom}
          prenom={stagiaire.prenom}
          filliere={stagiaire.filliere}
        />
      ))}
    </div>
  );
};

export default ListStagiaire;
