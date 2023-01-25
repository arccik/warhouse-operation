import UserEntry from "../../components/UserEntry/UserEntry";
import { Container } from "@mui/material";

const AddUserRecord = () => {
  return (
    <Container maxWidth="md">
      <p>User Records will be added here</p>
      <UserEntry />
    </Container>
  );
};

export default AddUserRecord;
