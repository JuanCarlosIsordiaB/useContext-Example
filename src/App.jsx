import { Balance } from "./components/Balance";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { GlobalProvider } from "./context/GlobalState";


const App = () => {
  return (
    <GlobalProvider>
      <Balance />
      <Form />
      <List />
    </GlobalProvider>
  )
}

export default App;
