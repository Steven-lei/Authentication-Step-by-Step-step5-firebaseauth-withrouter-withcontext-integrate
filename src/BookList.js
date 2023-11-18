import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

function BookList() {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  //notice the previous code is copied from file to file, why not use protected route
  return (
    <>
      <h1>fetch booklist from firestore</h1>
      <table>
        <tbody>
          <tr>
            <td>book1</td>
            <td>
              <button
                onClick={() => {
                  navigate("/book/book1");
                }}
              >
                Show content
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default BookList;
