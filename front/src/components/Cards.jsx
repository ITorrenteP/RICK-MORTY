import React from "react"
import Card from './Card';



function Cards({characters, onClose}) {
   // const { characters } = props
   return ( 
   <div>
      {characters.map((character) => (
         <Card
         key={character.id} 
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         onClose={onClose}         
          />
      ))}
   </div>
   )
}

export default Cards