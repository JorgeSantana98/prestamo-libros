import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <div>
      <h1>React Mysql</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Libro</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navegacion;
