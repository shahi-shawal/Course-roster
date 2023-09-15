import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Showcart from "../ShowCart/Showcart";
const Cart = ({cardSelect}) => {

  let TotalPrice=0
  let TotalCredit=0
  let remaining=0
  cardSelect.forEach(element => {
    const price= element.price
    const hour = element.credit
    TotalPrice=TotalPrice+price
    TotalCredit = TotalCredit+hour
    
    
  });
  if ( TotalCredit > 20) {
    return  toast.warning("You Have no More Credit to Take it");
  }
  remaining = 20-TotalCredit;
   
  
   

  return (
    
    <div className="w-1/4 bg-white rounded-md shadow-xl mt-8 mr-2 h-[600px]">
     {/* <h1>Cart:{cardSelect.length}</h1> */}

     <h1 className='p-2 text-xl font-bold text-[#2F80ED]'>Credit Hour Remaining {remaining} hr</h1>
       <hr className="bg-white mt-4 h-5"></hr>
       <div>
     <ToastContainer />
        <h1 className="text-2xl font-bold text-left p-2">Course Name</h1>
       {
          cardSelect.map((selected,idx)=> <Showcart key={idx} id={idx} selected={selected}></Showcart>)
        }
       </div>
       <hr className="mt-20"></hr>
     <h1 className='p-2 text-lg text-gray-600 font-bold'>Total Credit Hour : {TotalCredit}</h1>
     <hr />
     <h1 className='p-2 text-lg text-gray-600 font-bold'>Total Price: {TotalPrice.toFixed(2)} USD</h1>

    </div>
  );
};

Cart.propTypes = {
    cardSelect:PropTypes.object.isRequired
};

export default Cart;
