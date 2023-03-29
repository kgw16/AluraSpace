import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";

import Cards from "./Cards";

export default function Galeria() {

  const [itens,setItens] = useState(fotos);


//(new Set) cria um array com os valores de tags que foi obtidos com o (map) em fotos, sem repetir os valores, depois desestrutura dentro de um array
  const tags = [...new Set(fotos.map((valor)=>valor.tag))]

  const filtrarFotos = (tag) =>{
    const novasFotos = fotos.filter((foto)=>{
      return foto.tag === tag
    })

    setItens(novasFotos)
  }
 

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
      <Cards itens={itens} styles={styles}/>
    </section>
  );
}
