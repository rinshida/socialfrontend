import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const token = localStorage.getItem("id");

  // if logged in, redirect to home or posts
  if (token) {
    return <Navigate to="/posts" replace />;
  }

  // if not logged in, allow access
  return children;
}

export default PublicRoute;