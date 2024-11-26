import axios from "axios";

export const fetchLatestVersion = async (): Promise<string> => {
  try {
    const response = await axios.get(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    return response.data[0];
  } catch (err) {
    console.error("Failed to fetch the latest version:", err);
    throw new Error("Unable to fetch the latest version");
  }
};
