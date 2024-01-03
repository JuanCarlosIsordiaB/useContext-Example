import { useState } from "react"
import { useGlobalState } from "../context/GlobalState";




export const Form = () => {

    const {addTransaction} = useGlobalState();

    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(desc, amount);
        addTransaction({
            id: Date.now(),
            desc,
            amount: +amount
        })
        
    }

  return (
    <div>

        <form 
            action=""
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="Ingresa una descripcion"
                onChange={(e) => setDesc(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Ingresa una descripcion"
                onChange={(e) => setAmount(e.target.value)}
            />
            <button
            
            >
                Add
            </button>
            
        </form>
    </div>
  )
}
