import { redirect } from "react-router";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}
export async function tokenLoader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }
  return null;
}

export async function checkExpirationToken(statusCode) {
  if (statusCode === 400) {
    localStorage.removeItem("token");
    return redirect("/");
  }
}
