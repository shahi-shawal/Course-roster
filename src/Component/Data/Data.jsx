
import PropTypes from 'prop-types';

const Data = ({course}) => {
    const {img,course_name, course_description,price,credit}=course
    return (
        <div>
                  <div className="p-4 ">
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
     <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     </div>
    </div>
        </div>
    );
};

Data.propTypes = {
    course: PropTypes.object.isRequired
};

export default Data;