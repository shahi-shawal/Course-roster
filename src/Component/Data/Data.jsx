import PropTypes from "prop-types";

const Data = ({ course }) => {
  const { img, course_name, course_description, price, credit } = course;
  return (
    <div>
      <div className="p-4 ">
        <div className="">
          <div className="card bg-base-100 shadow-xl">
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

              <button className="btn btn-primary">Select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Data.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Data;
