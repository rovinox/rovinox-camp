import React from "react";
import HomeworkSubmission from "../component/HomeworkSubmission";
import GradeHomework from "../student/GradeHomework";

export default function HomeworkList({ batchId, selectedDay, isAdmin }) {
  return (
    <div>
      {isAdmin ? (
        <GradeHomework batchId={batchId} selectedDay={selectedDay} />
      ) : (
        <HomeworkSubmission selectedDay={selectedDay} />
      )}
    </div>
  );
}
