import { useGetUserEntryQuery } from "@/services/User/userSlice";
import UserEntry from "../components/UserEntry";
import Loader from "@/components/utils/Loader/Loader";
import { Container } from "@mui/material";

export default function Home() {
  const { data, isLoading, error } = useGetUserEntryQuery();
  if (isLoading) return <Loader />;
  if (error) return <p>Ops. something went wrong</p>;
  return (
    <Container maxWidth="sm">
      <h1>Scanned products</h1>
      {data?.map((v) => (
        <span key={v._id}>
          <p>
            {v.materialCode} - {v.quantity}
          </p>
        </span>
      ))}
      <UserEntry />
    </Container>
  );
}
