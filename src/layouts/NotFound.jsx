import { Link } from "react-router-dom";
import page_not_found from "../assets/page_not_found.svg";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <img
        src={page_not_found}
        alt="page_not_found"
        style={{
          width: "100%",
          maxWidth: "500px",
        }}
      />
      <Link
        to="/"
        style={{
          color: "#E24149",
          fontSize: "1rem",
          fontWeight: "bold",
          marginTop: "2em",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
