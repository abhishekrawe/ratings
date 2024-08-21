export const fetchCollegeData = async (page = 1) => {
  try {
    const module = await import("../constant/data");
    const allData = module.default || module.data;
    const rowsPerPage = 10;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return allData.slice(startIndex, endIndex);
  } catch (error) {
    console.error("Error fetching college data:", error);
    return [];
  }
};
