import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Stagiaire from "./Stagiaire";
import Header from "../Header";

const DetailStagiaire = () => {
  const { nom } = useParams();
  const stagiaires = useSelector((store) => store.stagiaire);
  const [detail, setDetails] = useState([]);

  const findUser = () => {
    const condition = stagiaires.filter((stagiaire) => stagiaire.nom === nom);
    setDetails(condition);
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <div>
      <Header/>
      {detail.map((stagiaire) => (
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

export default DetailStagiaire;
