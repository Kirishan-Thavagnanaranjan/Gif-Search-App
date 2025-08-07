import GifGrid from "@/components/GifGrid"
import SearchBar from "@/components/SearchBar"
import { useState } from "react"


const Home = () => {

  const [query, setQuery] = useState("");

  return (
    <div className="flex min-h-svh flex-col  p-4 justify-center bg-white">
      <h1 className="flex text-4xl font-extrabold justify-center animate-pulse ">Gif Quest</h1>
      <SearchBar query={query} setQuery={setQuery} />

      <GifGrid query={query} />
    </div>
  )
}

export default Home