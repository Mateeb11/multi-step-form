import { useState } from "react";

import classes from "./Content.module.scss";

import Info from "./Form/Info";

export default function Content() {
  const [info, setInfo] = useState({ Name: "", Email: "sajkdkj", Number: "" });
  console.log(info);
  return (
    <>
      <Info setInfo={setInfo} info={info} />
    </>
  );
}
