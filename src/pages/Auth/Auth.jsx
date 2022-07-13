import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({component}) => {
  const user = useSelector(state => state.auth.user);

  if (user === null) return <h1>Cargando...</h1>

  if (user === false) return <Navigate to="/login" />

  if (user?.email) return component;
};

export default Auth;
