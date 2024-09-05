import { redirect } from "react-router";
import { url } from "./url";
export default async function patientLoaderUtilFun({ request }) {
  const token = localStorage.getItem("token");
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  if (token) {
    try {
      const response = await fetch(`${url}/Patient/loadPatient`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(param),
      });
      if (response.status === 400) {
        localStorage.removeItem("token");
        return redirect("/");
      }
      const resData = await response.json();
      return resData;
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    return redirect("/");
  }
}
