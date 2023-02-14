import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

function ContentRowMovies({infoUsers, infoProducts}){
   
        if(infoUsers !== undefined && infoProducts !== undefined)
        {   let productsInDB = {
                title: 'Products in Data Base',
                color: 'primary', 
                cuantity: infoProducts.count,
                icon: 'fa-clipboard-list'
            }
            
            let categoriesInDB = {
                title:'Total categories', 
                color:'success', 
                cuantity: Object.keys(infoProducts.countByCategory).length,
                icon:'fa-award'
            }
            
            let usersInDB = {
                title:'Total users' ,
                color:'warning',
                cuantity: infoUsers.count,
                icon:'fa-user-check'
            }
       
        let cartProps = [productsInDB, categoriesInDB, usersInDB]; 
        return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
    }
    else {
        
        return <h2>Cargando...</h2>  
    }
}

export default ContentRowMovies;