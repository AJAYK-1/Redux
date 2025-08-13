import BurgerBox from "./components/BurgerBox"
import { Provider } from "react-redux"
import store from "./components/Redux/store"
import HookContainer from "./components/HookContainer"
import PizzaBox from "./components/PizzaBox"
import CustomerChoice from "./components/CustomerChoice"
import ProductComponent from "./components/ProductComponent"
import PizzaBurgerView from "./components/PizzaBurgerView"
import ProductView from "./components/productView"


function App() {

  return (
    <>
      {/* <Provider store={store}> */}
      {/* <BurgerBox /> */}
      {/* <PizzaBox /> */}
      {/* <HookContainer /> */}
      {/* <CustomerChoice /> */}
      {/* <ProductComponent /> */}
      {/* </Provider> */}
      {/* <PizzaBurgerView /> */}
      <ProductView />
    </>
  )
}

export default App
