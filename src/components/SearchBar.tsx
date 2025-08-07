import React from "react"
import toast from 'react-hot-toast';


interface Props {
  query: string,
  setQuery: (value: string) => void
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  console.log(query);
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="placeholder:text-gray-500 placeholder:italic border border-gray-300 rounded px-4 py-2 w-1/2 shadow-md focus:outline-none focus:ring-2 
        focus:ring-blue-300 focus:border-transparent transition duration-200 ease-in-out
        bg-gray-50 rounded-md"
        placeholder="Search for GIFs..."
      />
      <button
        aria-label="Clear search"
        onClick={() => {
          if (!query) {
            toast.error("Search is already empty!");
            return;
          }
          setQuery("");
          toast.success("Search cleared!");
        }}
        className="ml-2 px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-blue-500 transition duration-200 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        Clear
      </button>
    </div>
  )
}

export default SearchBar