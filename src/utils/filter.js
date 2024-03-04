import { dateFormatter } from "./dateFormatter";

export const filter = (apartmentData, filteredDetails) => {
  const filteredApartments = [];

  apartmentData.forEach((apartment) => {
    if (filteredDetails.startingDate === null) {
      const newFilteredApartment = {
        id: apartment.id,
        title: apartment.title,
        image: apartment.image,
        capacity: apartment.capacity,
        beachDistanceInMeters: apartment.beachDistanceInMeters,
        amenities: apartment.amenities,
        date: null,
        numberOfNights: null,
        minPrice: minPrice(apartment.pricelistInEuros),
        maxPrice: maxPrice(apartment.pricelistInEuros),
        totalPrice: null,
      };

      filteredApartments.push(newFilteredApartment);
    } else {
      if (
        isApartmentAvailable(
          apartment.availableDates,
          filteredDetails.startingDate,
          filteredDetails.endingDate
        ) &&
        apartment.capacity >= filteredDetails.people &&
        amenitiesCompare(apartment.amenities, filteredDetails.amenities)
      ) {
        const newFilteredApartment = {
          id: apartment.id,
          title: apartment.title,
          image: apartment.image,
          capacity: apartment.capacity,
          beachDistanceInMeters: apartment.beachDistanceInMeters,
          amenities: apartment.amenities,
          date: `${dateFormatter(
            filteredDetails.startingDate
          )} - ${dateFormatter(filteredDetails.endingDate)}`,
          numberOfNights: calculateNightsBetweenDates(
            filteredDetails.startingDate,
            filteredDetails.endingDate
          ),
          minPrice: null,
          maxPrice: null,
          totalPrice: calculateTotalPrice(
            filteredDetails.startingDate,
            filteredDetails.endingDate,
            apartment.pricelistInEuros
          ),
        };

        filteredApartments.push(newFilteredApartment);
      }
    }
  });

  return filteredApartments;
};

const minPrice = (array) => {
  return array.reduce((min, current) => {
    return current.pricePerNight < min ? current.pricePerNight : min;
  }, array[0].pricePerNight);
};

const maxPrice = (array) => {
  return array.reduce((max, current) => {
    return current.pricePerNight > max ? current.pricePerNight : max;
  }, array[0].pricePerNight);
};

const isApartmentAvailable = (availableDates, startingDate, endingDate) => {
  for (const availableDate of availableDates) {
    const intervalStart = new Date(availableDate.intervalStart);
    const intervalEnd = new Date(availableDate.intervalEnd);
    intervalStart.setHours(
      startingDate.getHours(),
      startingDate.getMinutes(),
      startingDate.getSeconds()
    );
    intervalEnd.setHours(
      endingDate.getHours(),
      endingDate.getMinutes(),
      endingDate.getSeconds()
    );

    if (startingDate >= intervalStart && endingDate <= intervalEnd) {
      return true;
    }
  }
  return false;
};

const amenitiesCompare = (apartmentAmenities, filteredAmenities) => {
  const trueValues = Object.values(filteredAmenities).filter((value) => value);
  const trueKeys = Object.keys(apartmentAmenities).filter(
    (_, index) => index < trueValues.length
  );
  return trueValues.every(
    (value, index) => apartmentAmenities[trueKeys[index]]
  );
};

const calculateNightsBetweenDates = (startDate, endDate) => {
  const start = startDate.getTime();
  const end = endDate.getTime();

  const difference = Math.abs(end - start);
  const nights = Math.ceil(difference / (1000 * 3600 * 24));

  return nights;
};

const calculateTotalPrice = (startDate, endDate, priceList) => {
  let totalPrice = 0;

  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const startOfCurrentDate = new Date(currentDate);
    startOfCurrentDate.setHours(
      startDate.getHours(),
      startDate.getMinutes(),
      startDate.getSeconds()
    );

    const endOfCurrentDate = new Date(currentDate);
    endOfCurrentDate.setHours(
      endDate.getHours(),
      endDate.getMinutes(),
      endDate.getSeconds()
    );

    const priceObj = priceList.find((item) => {
      const intervalStart = new Date(item.intervalStart);
      const intervalEnd = new Date(item.intervalEnd);

      intervalStart.setHours(
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds()
      );
      intervalEnd.setHours(
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds()
      );

      return (
        startOfCurrentDate >= intervalStart && endOfCurrentDate <= intervalEnd
      );
    });

    if (priceObj) {
      if (currentDate.getTime() !== endDate.getTime()) {
        totalPrice += priceObj.pricePerNight;
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return totalPrice;
};
