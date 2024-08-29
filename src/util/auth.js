import { redirect } from "react-router";
import { url } from "./url";
export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}
export async function tokenLoader() {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    const response = await fetch(`${url}/Authentication/staticAuthentication`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (!response.ok) {
      localStorage.removeItem("token");
      return redirect("/");
    }
  } else {
    return redirect("/");
  }
  return null;
}
