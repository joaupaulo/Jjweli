import React  , {Component} from 'react'
import './Header.css'
import { menuItens} from './menuItens'


export default class Header extends Component {
    render() {
        return( <nav className="navstyle"> 
        
        <ul>
{menuItens.map( (item,index) => {
   return (<li><a className={item.namecss} href={item.url}> {item.nomelink} </a>  </li> )
})}
         </ul>
    
        </nav>)
 }




}