import { useParams } from "react-router-dom";
import DepartmentPage from "./DepartmentPage";

const DeptRouteWrapper = () => {
  const { dept } = useParams();
  return <DepartmentPage departmentKey={dept} />;
};

export default DeptRouteWrapper;
