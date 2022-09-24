import * as React from "react";
import CourseContent from "./CourseContent";
import CourseListDrawer from "./CourseListDrawer";
import NoCourse from "./NoCourse";

export default function StudentLanding() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [currentCourse, setCurrentCourse] = React.useState(0);
  const [activeStudent, setActiveStudent] = React.useState(true);
  console.log(currentCourse);
  return (
    <div>
      {activeStudent ? (
        <>
          <CourseContent day={currentCourse} />
          <CourseListDrawer
            currentCourse={currentCourse}
            setCurrentCourse={setCurrentCourse}
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
          />
        </>
      ) : (
        <NoCourse />
      )}
    </div>
  );
}
