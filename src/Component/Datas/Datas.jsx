
// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Data from "../Data/Data";

const Datas = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
      fetch("Course.json")
      .then(res=> res.json())
      .then(data=> setCourses(data.courses))
    },[])
    return (
        <div>
        <h1>Course: {courses.length}</h1>
        {
            courses.map((course,idx)=><Data key={idx} course={course}></Data>)
        }
        </div>
    );
};

// Datas.propTypes = {
    
// };

export default Datas;