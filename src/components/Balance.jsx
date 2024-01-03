import { useGlobalState } from "../context/GlobalState"




export const Balance = () => {

  const {transactions}= useGlobalState();

  const amounts = transactions.map( transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc+=item),0);
    

  return (
    <div>
      
      <h1>Balance: ${total}</h1> 
    </div>
  )
}
