import { redirect } from "react-router";
import { url } from "./url";
export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}
export async function tokenLoader() {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch(
        `${url}/Authentication/staticAuthentication`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 400 || response.status === 503) {
        localStorage.removeItem("token");
        return redirect("/");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    return redirect("/");
  }
  return null;
}
