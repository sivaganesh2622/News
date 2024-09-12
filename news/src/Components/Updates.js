import React, { useEffect, useState } from 'react'
 
function Updates() {
 const [updatesnews, setupdatenews] = useState([])
 useEffect(() => {
   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b8047d0443ba4d0e9eb76690d5e64387`

   fetch(url).then(response => response.json()).then(data => setupdatenews(data.articles))

 }, [])



 return (
   <>
     {updatesnews.map((item, index) => {
       return (
         <>

           <div className=" card bg-dark text-light  mb-2 d-inline-block my-2 mx-5 px-3 py-3" style={{ maxWidth: "350px",flexGrow: "1" }} >
             <img src={item.urlToImage} className="card-img-top" alt=""/>
               <div className="card-body">
                 <h5 className="card-title">{item.title}</h5>
                 <p className="card-text">{item.description}</p>
                 <a href={item.url} className="btn btn-primary">show more</a>
               </div>
             </div> 
         </>
       )
     })}
   </>
 )
}
 
export default Updates 

 