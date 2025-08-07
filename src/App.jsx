import BurgerBox from "./components/BurgerBox"
import { Provider } from "react-redux"
import store from "./components/Redux/store"
import HookContainer from "./components/HookContainer"
import PizzaBox from "./components/PizzaBox"
import CustomerChoice from "./components/CustomerChoice"
import ProductComponent from "./components/ProductComponent"


function App() {

  return (
    <>
      <Provider store={store}>
        {/* <BurgerBox /> */}
        {/* <PizzaBox /> */}
        {/* <HookContainer /> */}
        {/* <CustomerChoice /> */}
        <ProductComponent />
      </Provider>
    </>
  )
}

export default App
