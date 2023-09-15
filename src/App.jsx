
import { useState } from 'react'
import './App.css'
import Cart from './Component/Cart/Cart'
import Datas from './Component/Datas/Datas'
import Header from './Component/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cardSelect, setCard]= useState([])
  const handelSelect =(select)=>{
        // console.log("click",select);
       const findItem= cardSelect.find((carded)=> carded.id ===select.id)
        if (findItem) {
         return  toast.info("add only once")
        }
        const newSelect = [...cardSelect,select];
        setCard(newSelect)
  }
  return (
    <>
      <Header></Header>
      <div className='flex gap-1'>
        <ToastContainer />
      <Datas handelSelect={handelSelect}></Datas>
      <Cart cardSelect={cardSelect}></Cart>
      </div>
    </>
  )
}

export default App
