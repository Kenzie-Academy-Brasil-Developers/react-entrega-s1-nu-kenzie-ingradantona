import trash from '../../img/trash.png'
import './style.css'

export default function List({transactionList, setTransactionList, setTotalValue}){
    const deleteIten = (i) => {
        const newList = transactionList.filter((element, index) => i !== index)

        console.log(newList)
        
        let sum = newList.reduce((acc, element) => {
            return element.type === 'entrada' ? acc + element.value : acc - element.value
        }, 0)

        setTotalValue(sum)

        setTransactionList(newList)
    }
    
    return(
        <ul className='transaction__list'>
            {transactionList.map((element, index) => {
                return (
                    <li key={index} className={'transaction ' + element.hide}>
                        <div className={ element.type === 'entrada' ? 'deposit' : 'debit'}></div>
                        <div className='transaction--description'>
                            <h3 className='title3'>{element.description}</h3>
                            <span className='body'>{element.type}</span>
                        </div>
                        <div className='transaction--value'>
                            <p className='body'>R${element.value}</p>
                            <button className='button button__delete' onClick={() => deleteIten(index)}><img src={trash} alt='trash' ></img></button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}