
import PropTypes from 'prop-types';
const Showcart = ({selected,id}) => {
    const {course_name}=selected
    return (
         <div>
            <div className='text-xl font-semibold p-2'>
            <h1>{id+1}. {course_name}</h1>
            </div>
         </div>
    );
};

Showcart.propTypes = {
    selected:PropTypes.object,
    id: PropTypes.number,
};

export default Showcart;