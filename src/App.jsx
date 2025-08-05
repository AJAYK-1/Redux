import BurgerBox from "./components/BurgerBox"
import { Provider } from "react-redux"
import store from "./Redux/store"


function App() {

  return (
    <>
      <Provider store={store}>
        <BurgerBox />
      </Provider>
    </>
  )
}

export default App
