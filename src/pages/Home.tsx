import GifGrid from "@/components/GifGrid"
import SearchBar from "@/components/SearchBar"
const Home = () => {
  return (
    <div>
        <h1 className="flex text-3xl font-bold justify-centerr">Gif Quest</h1>
        <SearchBar />
        <GifGrid />
    </div>
  )
}

export default Home