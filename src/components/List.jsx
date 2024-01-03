import { useGlobalState } from "../context/GlobalState"



export const List = () => {

    const {transactions, deleteTransaction} = useGlobalState();

  return (
    <div>
        {
            transactions.map( transaction =>
                <div key={transaction.id}>
                    <h1>{transaction.desc}</h1>
                    <h2>{transaction.amount}</h2>
                    <button
                        onClick={() => deleteTransaction(transaction.id)}
                    >Delete</button>
                </div>
            )
        }

    </div>
  )
}
