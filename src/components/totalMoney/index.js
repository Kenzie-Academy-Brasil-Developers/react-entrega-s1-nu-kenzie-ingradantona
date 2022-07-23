import './style.css'

export default function TotalMoney ({totalValue}){
    return (
        <section className='totalValue'>
            <div>
                <h2 className='title3'>Valor Total:</h2>
                <p className='title3 title3--pink'>R$ {totalValue}</p>
            </div>
            <span className='body'>O valor se refere ao saldo</span>
        </section>
    )
}