import './style.css'

export default function Module({setTransaction}){
    return(
        <div className='module--background'>
            <div className='module--error'>
                <button onClick={() => setTransaction(true)}>X</button>
                <h2 className='title2 title2--pink'>Ops... Ocorreu um erro!</h2>
                <p className='body'>Por favor adicione um valor válido.</p>
            </div>
        </div>
    )
}