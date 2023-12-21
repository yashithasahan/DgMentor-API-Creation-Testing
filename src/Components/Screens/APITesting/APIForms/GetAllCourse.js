import { useEffect, useState } from "react";

const GetAllCourse = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/courses/");
        const json = await response.json();
        if (response.ok) {
          setCourses(json);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h3>All course</h3>
      {courses && courses.map((course) => <h2>{course.title}</h2>)}
    </div>
  );
};

export default GetAllCourse;
