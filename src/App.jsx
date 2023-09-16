
import { useState } from 'react'
import './App.css'
import Cart from './Component/Cart/Cart'
import Datas from './Component/Datas/Datas'
import Header from './Component/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cardSelect, setCard]= useState([])
  const [totalCredit, setCredit]= useState(0);
  const [remaning, setRemaining]= useState(0)
  const handelSelect =(select)=>{
       const findItem= cardSelect.find((carded)=> carded.id ===select.id)
        let credit = select.credit
       if (findItem) {
         return  toast.info("add only once")
        }
        else{
          cardSelect.forEach((item)=>{
            credit = credit+item.credit
          })
          const totalRemaining = 20- credit;
          if (credit > 20) {
            return toast.warning("You Have no More Credit to Take it")
          }else{
            setCredit(credit)
          setRemaining(totalRemaining);
          }
          
        }
        const newSelect = [...cardSelect,select];
        setCard(newSelect);
  }
  
  return (
    <>
      <Header></Header>
      <div className='flex gap-1'>
        <ToastContainer />
      <Datas handelSelect={handelSelect}></Datas>
      <Cart cardSelect={cardSelect} totalCredit={totalCredit} remaning={remaning}></Cart>
      </div>
    </>
  )
}

export default App
