import React , {useState} from 'react'
import './Main.css'
import cardi1 from '../images/cardi1.jpg'
import cardi2 from '../images/cardi2.jpg'
import beyonce2 from '../images/beyonce2.jpg'
import rihanna1 from '../images/rihanna1.jpg'
import rihanna2 from '../images/rihanna2.jpg'
import rihanna3 from '../images/rihanna 3.jpg'
import negrali from '../images/negrali1.jpeg'
import negrali2 from '../images/negrali2.jpg'
import negrali3 from '../images/negrali3.jpg'











 const Main = () =>    {
   

return( 
<section className="container"> 

<div className="card"> 
<div className="card-image" style={{ backgroundImage: `url(${rihanna1})` }} >   </div>
<div className="card-text">
<h1>  VERSACE </h1>
<h2> ANEL VERSACE </h2>
<h2>  R$ 2.090 </h2>
</div>
  </div>
  </section>
  )
  
}

export default  Main