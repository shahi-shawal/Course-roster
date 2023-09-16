
import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Data from "../Data/Data";

const Datas = ({handelSelect}) => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
      fetch("Course.json")
      .then(res=> res.json())
      .then(data=> setCourses(data.courses))
    },[])
    return (
        <div className='w-3/4 mt-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {
            courses.map((course,)=><Data key={course.id} course={course} handelSelect={handelSelect}></Data>)
        }
        </div>

        </div>
    );
};

Datas.propTypes = {
    handelSelect:PropTypes.func.isRequired
};

export default Datas;