import { useEffect, useContext, useState } from "react";
import { FilterContext } from "../../../context/FilterContext";
import ApartmentCard from "../../../components/ApartmentCard/ApartmentCard";
import { mapApartmentData } from "../../../api/map";
import { filter } from "../../../utils/filter";

const ApartmentsList = () => {
  const { filterDetails } = useContext(FilterContext);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apartments = await mapApartmentData();
        const filteredData = filter(apartments, filterDetails);
        setFilteredApartments((prevFilteredData) => {
          return filteredData;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (filterDetails) {
      fetchData();
    }
  }, [filterDetails]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="main">
      <div className="main__wrapper">
        {filteredApartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </main>
  );
};

export default ApartmentsList;
