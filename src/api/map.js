import { fetchApartmentData } from "./fetch";

export async function mapApartmentData() {
  const allApartments = await fetchApartmentData();
  const apartmentList = allApartments.map((apartment) => {
    return {
      id: apartment.id,
      title: apartment.title,
      image: apartment.image,
      capacity: apartment.capacity,
      beachDistanceInMeters: apartment.beachDistanceInMeters,
      amenities: apartment.amenities,
      pricelistInEuros: apartment.pricelistInEuros,
      availableDates: apartment.availableDates,
    };
  });
  return apartmentList;
}
