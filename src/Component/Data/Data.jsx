import PropTypes from "prop-types";

const Data = ({ course,handelSelect }) => {
  const { img, course_name, course_description, price, credit } = course;
  return (
    <div>
      <div className="p-4">
        <div className="">
          <div className="card bg-base-100 shadow-xl h-[402px] ">
            <figure className="px-5 pt-5">
              <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course_name}</h2>
              <p>{course_description}</p>
              <div className="flex flex-col lg:flex-row justify-between ">
                <p className="text-xl font-semibold">Price: {price}</p>
                <p className="text-xl font-semibold"> Credit: {credit} hr</p>
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
