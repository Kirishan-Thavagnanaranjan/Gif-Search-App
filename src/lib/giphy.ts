// Define the Gif type
export interface Gif {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}

export const fetchGifs = async (query: string): Promise<Gif[]> => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${apiKey}&limit=15`;


  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data.data as Gif[]; // Type assertion to match Gif[]
  } catch (error) {
    console.error("Failed to fetch GIFs:", error);
    return []; // Return empty array on failure
  }
};
