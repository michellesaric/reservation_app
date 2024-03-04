import axios from "axios";

export async function fetchApartmentData() {
  const url = "https://api.adriatic.hr/test/accommodation";
  try {
    const response = await axios.get(url);
    const allApartments = response.data;
    return allApartments;
  } catch (error) {
    console.log(error);
    return [];
  }
}
