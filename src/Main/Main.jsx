import React , {useState} from 'react'
import './Main.css'
import cardi1 from '../images/rihannaedit1.jpg'
import cardi2 from '../images/rihannaedit2.jpg'
import cardi3 from '../images/rihannaedit3.jpg'
import cardi4 from '../images/cardibb1.jpg'
import cardi5 from '../images/cardiibedit.jpg'



 const Main = () =>    {
  
const [click,setClick] = useState(false) 



return( 
<section className="container"> 

<div className="boxcard"> 

<div className="card"> 
<div className="card-image"> <img src={cardi1}></img>  </div>

<div className="card-text">

<h1> VERSACE </h1>
<h3> ANEL VERSACE </h3>
<h3>  R$ 2.090 </h3>
</div>
 
  </div>


  <div className="card"> 
<div className="card-image"  > <img src={cardi2}></img>   </div>
<div className="card-text">
<h1>  VERSACE </h1>
<h3> ANEL VERSACE </h3>
<h3>  R$ 2.090 </h3>
</div>
  </div>



  <div className="card"> 
<div className="card-image"> <img src={cardi3}></img>   </div>
<div className="card-text">
<h1>  VERSACE </h1>
<h3> ANEL VERSACE </h3>
<h3>  R$ 2.090 </h3>
</div>
  </div>


</div>


<div className="boxcard"> 

<div className="card"> 
<div className="card-image"> <img src={cardi4}></img>  </div>
<div className="card-text">
<h1>  VERSACE </h1>
<h3> ANEL VERSACE </h3>
<h3>  R$ 2.090 </h3>
</div>
  </div>


  <div className="card"> 
<div className="card-image"  > <img src={cardi5}></img>   </div>
<div className="card-text">
<h1>  VERSACE </h1>
<h3> ANEL VERSACE </h3>
<h3>  R$ 2.090 </h3>
</div>
  </div>



  <div className="card"> 
<div className="card-image"> <img src={cardi1}></img>   </div>
<div className="card-text">
<h1>  VERSACE </h1>
<h3> ANEL VERSACE </h3>
<h3>  R$ 2.090 </h3>
</div>
  </div>


</div>


  </section>
  )
  
}

export default  Main