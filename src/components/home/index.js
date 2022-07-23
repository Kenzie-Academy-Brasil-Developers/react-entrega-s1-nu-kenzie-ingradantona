import { useState } from "react"
import './style.css'
import noCard from '../../img/NoCard.png'
import Header from "../header"
import Form from "../form"
import Filter from "../filter"
import List from "../list"

export default function Home ({setlogin}){
    const [transactionList, setTransactionList] = useState([])

    return(
        <>
            <Header setlogin={setlogin}/>
            <main className="accountPage">
                <section className="form--section">
                    <Form transactionList={transactionList} setTransactionList={setTransactionList}/>
                </section>
                <section className="list--section">
                    <Filter transactionList={transactionList} setTransactionList={setTransactionList}/>
                    {transactionList.length ? (
                        <List transactionList={transactionList} setTransactionList={setTransactionList}/> 
                    ):(
                        <div className="noCard">
                            <img src={noCard} alt="no card"></img>
                            <img src={noCard} alt="no card"></img>
                            <img src={noCard} alt="no card"></img>
                        </div>
                    )}
                </section>
            </main>
        </>
    )
}