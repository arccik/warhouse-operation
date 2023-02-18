import { setRowId, selectAllRows } from "@/features/AppState/tableSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TestPage = () => {
  const dispatch = useDispatch();
  const stateData = useSelector(selectAllRows);

  return (
    <>
      <p>Test page, close your eyes </p>
      <button onClick={() => dispatch(setRowId("21233213"))}>Press me</button>
    </>
  );
};

export default TestPage;
