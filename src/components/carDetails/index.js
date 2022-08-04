import React         from "react";
import data          from "../carCatalog/data"
import { useParams } from "react-router-dom";
import CarDetails    from "./carDetails";

const CarFlow = () => {
  const params = useParams()
  const { id } = params;
  return (
    <>
      {
        data.filter(val => val.id == `${ id }`).map((val) => {
          return <CarDetails
            city={ val.city }
            image1={ val.image1 }
            image2={ val.image2 }
            image3={ val.image3 }

          />
        })
      }
    </>
  )
}
export default CarFlow