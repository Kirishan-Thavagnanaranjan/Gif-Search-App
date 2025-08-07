import { fetchGifs } from "@/lib/giphy";
import { useEffect, useState } from "react";

interface Props {
  query: string;
}

interface Gif {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}

const GifGrid: React.FC<Props> = ({ query }) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGifs = async () => {
      if (!query.trim()) {
        setGifs([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const res = await fetchGifs(query);
        setGifs(res);
        console.log("Fetched GIFs:", res);
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      } finally {
        setLoading(false);

      }
    };

    getGifs();
  }, [query]);

  return (
    <div className="">
      {loading ? (
        <div className="text-center mt-4">
          <div className="w-8 h-8 border-4 border-blue-400 border-dashed rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading GIFs...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gifs.map((gif) => (
            <img key={gif.id} src={gif.images.original.url} alt={gif.title} loading="lazy" />

          ))}
        </div>

      )}
    </div>


  );
};

export default GifGrid;
