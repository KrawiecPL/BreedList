import { NavLink } from "react-router-dom";

const Dog = ({ breed, id }) => (
  <NavLink to={`/${id}`}>
    <li>{breed}</li>
  </NavLink>
);

export default Dog;
