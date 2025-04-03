import { useEffect, useState } from "react";
import axios from "axios";
import Tourcard from "./Tourcard";


const TourList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get("/api/tours").then((res) => setTours(res.data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {tours.map((tour) => (
        <Tourcard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};
export default TourList;
