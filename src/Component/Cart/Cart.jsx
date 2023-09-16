import PropTypes from "prop-types";
import Showcart from "../ShowCart/Showcart";
const Cart = ({cardSelect,remaning,totalCredit}) => {

  let TotalPrice=0
  
  cardSelect.forEach(element => {
    const price= element.price
    TotalPrice=TotalPrice+price
    
    
  });
  
   

  return (
    
    <div className="w-2/4 lg:w-1/4 bg-white rounded-md shadow-xl mt-8 mr-2 lg:h-[600px]">

     <h1 className='p-2 text-xl font-bold text-[#2F80ED]'>Credit Hour Remaining {remaning} hr</h1>
       <hr className="bg-white mt-4 h-5"></hr>
       <div>
        <h1 className="text-2xl font-bold text-left p-2">Course Name</h1>
       {
          cardSelect.map((selected,idx)=> <Showcart key={idx} id={idx} selected={selected}></Showcart>)
        }
       </div>
       <hr className="mt-20"></hr>
     <h1 className='p-2 text-lg text-gray-600 font-bold'>Total Credit Hour : {totalCredit}</h1>
     <hr />
     <h1 className='p-2 text-lg text-gray-600 font-bold'>Total Price: {TotalPrice} USD</h1>

    </div>
  );
};

Cart.propTypes = {
    cardSelect:PropTypes.object.isRequired,
    remaning:PropTypes.number,
    totalCredit:PropTypes.number,
};

export default Cart;
