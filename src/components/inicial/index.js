import Img from "../../img/image.svg"
import logo from "../../img/NuKenzie.png"
import './style.css'

export default function Index ({setlogin}){
    return (
        <main className="initial">
            <section className="login">
                <img src={logo} alt= "logo"></img>
                <h1 className="title1 title1__white">Centralize o controle das suas finanças</h1>
                <span className="headline headline__white">de forma rápida e segura</span>
                <button className="button button__pink" onClick={() => setlogin(true)}>Iniciar</button>
            </section>
            <img src={Img} alt= "login page" className="initial--image"></img>
        </main>
    )
}