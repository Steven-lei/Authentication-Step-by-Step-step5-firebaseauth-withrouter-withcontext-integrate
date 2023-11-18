import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

function AddBook() {
  const { user } = useUserAuth();
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <>
      <h1> Adding book </h1>
      <p>submit book to firebase database below</p>
    </>
  );
}
export default AddBook;
