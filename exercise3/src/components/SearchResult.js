import React, { useState } from 'react';
import styles from './SearchResult.module.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = () => {
  const[rating, setRating] = useState(null);
  const[hover, setHover] = useState(null);

  return<div>
    {[...Array(5)].map((star, i) =>{
      const ratingValue = i + 1;


      return( 
        
        <label> 
          <input
            type="radio" 
            name="rating"
            value={ratingValue} 
            onClick={() => setRating(ratingValue)}
        />
        
        <FaStar 
          className="star" 
          color={ratingValue <= (hover || rating) ? "#E28560" : "#C9C9C9"} 
          size={20}
          onMouseEnter={() => setHover(ratingValue)}
          onMouseLeave={() => setHover(null)}
          /> 
      </label>       
      );
    })}
         <p className={styles.outOf}> {rating} out of 5 </p>
  
 
      
   </div>
};

export default function SearchResult(props) {
  return (
    
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={styles.rating}> <StarRating/> { props.rating }</div>
          <div className={styles.price}>${ props.price }</div>
          
        </div>
    </div>
  )
}

