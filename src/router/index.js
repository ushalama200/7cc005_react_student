import { Route, Routes } from "react-router-dom";
import Student from "../pages/Student";
import StudentCreate from "../pages/StudentCreate";
import StudentEdit from "../pages/StudentEdit";
import Home from "../pages/Home";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/student/create" element={<StudentCreate />} />
      <Route path="/student/:id/edit" element={<StudentEdit />} />
    </Routes>
  );
}
export default MyRouter;
