import './style.css'

export default function Filter ({transactionList, setTransactionList}){
    const filterDeposit = () => {
        const newList = transactionList.map((element) => {
            return ({
                description: element.description,
                value: element.value,
                type: element.type,
                hide: element.type !== 'entrada' ? element.hide = 'hide': element.hide = ''
            })
        })
        setTransactionList(newList)
    }
    const filterDebit = () => {
        const newList = transactionList.map((element) => {
            return ({
                description: element.description,
                value: element.value,
                type: element.type,
                hide: element.type === 'entrada' ? element.hide = 'hide': element.hide = ''
            })
        })
        setTransactionList(newList)
    }
    const filterAll = () => {
        const newList = transactionList.map((element) => {
            return ({
                description: element.description,
                value: element.value,
                type: element.type,
                hide: ''
            })
        })
        setTransactionList(newList)
    }

    return(
        <nav className="filter">
            <h2 className="title3">Resumo Financeiro</h2>
            <div>
                <button className="button button__pink button__small" onClick={() => filterAll()}>Todos</button>
                <button className="button button__small" onClick={() => filterDeposit()}>Entradas</button>
                <button className="button button__small" onClick={() => filterDebit()}>Despesas</button>
            </div>
        </nav>
    )
}