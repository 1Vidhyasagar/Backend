import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [ email, setEmail] = useState("");


  // Get users from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddUser = () => {
    axios.post("http://localhost:5000/users", { name, email }).then((res) => {
      setUsers([...users, res.data]);
      setName("");
      setEmail("");
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then(() => {
      setUsers(users.filter((user) => user._id !== id));
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        width: "80vw",
        backgroundColor: "grey",
      }}
    >
      <div
        style={{
          padding: "20px",
          margin: "20px",
          width: "80%",
          backgroundColor: "black",
        }}
      >
        <h1>User Manager</h1>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email: </label>

        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name}
              {user.email}
              <button onClick={() => handleDelete(user._id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
