import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";



function Card(props) {

const {  id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props; 
const [isFav, setIsFav] = useState(false)
const {pathname} = useLocation()

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   // useEffect(() => {
   //    myFavorites.forEach(fav => {
   //       if(fav.id === id){
   //          setIsFav(true)
   //       }
   //    })
   // }, [myFavorites])

   useEffect(()=>{
      for (let i = 0; i < myFavorites.length; i++) {
         if (myFavorites[i].id === id){
            setIsFav(true)
            break
         }
      }
   }, [myFavorites])
   
   return (
      <div>
         {
            pathname === '/home' &&  <button onClick={() => onClose(id)}>X</button>
         }

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <h2>{id}</h2>
         <Link to={`/detail/${id}`} >
           <h3 className="card-name">{name}</h3>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />

         
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id) {
         dispatch(removeFav(id))
      }
   }
}

function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);