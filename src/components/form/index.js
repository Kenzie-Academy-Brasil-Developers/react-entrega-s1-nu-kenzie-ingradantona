import "./style.css"

export default function Form ({setTransactionList, transactionList}){

    const newTransaction = (input)=>{
        const inputValues = {
            description: input[0].value,
            value: parseFloat(input[1].value) ? parseFloat(input[1].value) : 'Insira um número válido',
            type: input[2].value,
            hide: ''
        }

        setTransactionList([...transactionList, inputValues])
    }
    
    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            newTransaction(event.target)
            }}
            className='form'>
            <label className="caption">Descrição</label>
            <input 
                type='text'
                placeholder="Digite aqui sua descrição"
                className="form--input"
                required
            ></input>
            <span className="headline">Ex: Compra de roupas</span>
            <div className="form--description">
                <div>
                    <label className="caption">Valor</label>
                    <input
                        type='text'
                        placeholder="0.00"
                        className="form--input form--input__small"
                        required
                    ></input>
                    <span className="headline form--priceSymbol">R$</span>
                </div>
                <div>
                <label className="caption">Tipo de transação</label>
                    <select className="form--input form--input__small" required>
                        <option value="">--</option>
                        <option value="entrada">Entrada</option>
                        <option value="despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="button button__pink button__large">Inserir valor</button>
        </form>
    )
}