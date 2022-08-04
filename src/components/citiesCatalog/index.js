import React         from "react";
import City          from "./city";
import cities        from "./Cities";
import { useParams } from "react-router-dom";

const MyCity = () => {
  const params = useParams()
  const { city } = params;
  return (
    <>
      {
        cities.filter(val => val.city == `${ city }`).map((val) => {
          return <City
            city={ val.city }
            image={ val.image }
          />
        })
      }
    </>
  )
}
export default MyCity