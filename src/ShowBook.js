import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

function ShowBook() {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  const { id } = useParams();
  console.log(user);
  return <h1>Show book content{id}</h1>;
}

export default ShowBook;
