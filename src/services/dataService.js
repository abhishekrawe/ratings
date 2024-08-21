export const fetchCollegeData = async () => {
  try {
    const module = await import("../constant/data");
    return module.default || module.data;
  } catch (error) {
    console.error("Error fetching college data:", error);
    return [];
  }
};
