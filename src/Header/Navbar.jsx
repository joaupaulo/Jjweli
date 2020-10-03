 import React , {useState} from 'react'
 import './Navbar.css'
 import {menu} from './menu'
import Logo from '../images/logo.png'
import video from '../images/vitoria.jpg'

 const Navbar = () =>  {


return ( 
    


    
    <nav className="allNav"  style={{ backgroundImage: `url(${video})` }} >   


<div>  
<img alt="logomarca"src={Logo}/>
</div>     

    <div className="menuitem"> <ul>
{menu.map((item,index) => {
return(
<li key={index}> <a href={item.url} className={item.nameclass}>{item.name}</a></li>
)
})}
    </ul>
    </div>
  
<div className="homePAGE">

<p> As joias não enfeitam as mulheres, são as mulheres que enfeitam as joias. O que seria das joias se não houvesse as mulheres para lhes emprestarem vida e beleza?</p>

</div>

    </nav>
)
}

     





 export default Navbar