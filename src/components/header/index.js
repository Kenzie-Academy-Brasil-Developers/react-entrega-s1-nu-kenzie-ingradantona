import logo from "../../img/NuKenzie-black.png"
import './style.css'

export default function Header ({setlogin}){
    return (
        <header className="header">
            <img src={logo} alt= "logo"></img>
            <button onClick={() => setlogin(false)} className="button button__small">Início</button>
        </header>
    )
}