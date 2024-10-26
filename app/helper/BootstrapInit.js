"use client";
// import { useEffect } from "react";
// export default function BootstrapInit() {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       require("bootstrap/dist/js/bootstrap.bundle.min.js");
//     }
//   }, []);
//   return <>

//   </>;
// }
import  { useEffect } from 'react'

const BootstrapInit = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
          require("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
      }, []);
  return  null
}

export default BootstrapInit
