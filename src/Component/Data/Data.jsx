import PropTypes from "prop-types";
import { LuDollarSign } from "react-icons/Lu";
import { GoBook } from "react-icons/Go";
const Data = ({ course,handelSelect }) => {
  const { img, course_name, course_description, price, credit } = course;
  return (
    <div>
      <div className="p-4">
        <div className="">
          <div className="card bg-base-100 shadow-xl  h-[420px] ">
            <figure className="">
              <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold">{course_name}</h2>
              <p className="text-24">{course_description}</p>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex">
                  <span className="text-2xl"><LuDollarSign /></span>
                  <p>Price: {price}</p>
                  </div>
                <div className="flex"><span className="text-2xl"><GoBook /></span>
               <p className="ml-1">Credit: {credit} hr</p> </div>
              </div>

              <button className="btn hover:bg-[#2F80ED] bg-[#2F80ED] text-white  font-semibold" onClick={()=>handelSelect(course)}>Select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Data.propTypes = {
  course: PropTypes.object.isRequired,
  handelSelect:PropTypes.func.isRequired
};

export default Data;
