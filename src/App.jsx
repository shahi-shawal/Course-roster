
import './App.css'
import Cart from './Component/Cart/Cart'
import Datas from './Component/Datas/Datas'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex gap-2'>
      <Datas></Datas>
      <Cart></Cart>
      </div>
    </>
  )
}

export default App
