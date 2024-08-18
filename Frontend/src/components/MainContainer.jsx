import React, { useEffect, useState } from "react";

const MainContainer = () => {
  const [cards, setCards] = useState([]);
  const [filterCards, setFilterCards] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCards();
  }, []);

  const handleSearch = () => {
    setFilterCards(
      cards.filter((card) => {
        return (
          card.title.toLowerCase().includes(search.toLowerCase()) ||
          card.description.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  };
  // console.log(search);
  async function fetchAllCards() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/cards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const cards = await response.json();
      setCards(cards);
      setError("");
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      setError(error);
      setCards([]);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="bg-[#dadbf0] pt-8 md:pt-12 ">
      <div className="text-center  h-64 flex flex-col justify-center ">
        <h2 className="text-2xl md:text-6xl  font-bold">How can we help?</h2>
        <div className="mt-4">
          <label className="relative">
            <input
              type="text"
              placeholder="Search"
              value={search}
              className="p-3 w-80 md:w-1/2 text-gray-700 border rounded"
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(search);
                if (search == "") {
                  handleSearch();
                }
              }}
            />
            <span
              className="text-xl top-[-2px] absolute right-2 cursor-pointer "
              onClick={handleSearch}
            >
              {" "}
              🡢
            </span>
          </label>
        </div>
      </div>
      <div className="w-full md:p-20 p-5 bg-white md:px-40 lg:px-80 ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
          {loading && (
            <div className=" col-span-2">
              <img src="loading.svg" alt="" className="h-80 m-auto" />
            </div>
          )}
          {search == "" &&
            cards &&
            cards.map((card) => {
              return (
                <div
                  key={card._id}
                  className="p-6 px-0 bg-gray-100 rounded-lg shadow-md min-h-[150px] border-gray-400 border-2 "
                >
                  <h3 className="font-semibold px-6 text-lg text-gray-800">
                    {card.title}
                  </h3>
                  <hr className="h-[1.5px] bg-gray-400 border-0" />
                  <p className="text-sm mt-2 px-6 md:text-base">
                    {card.description}
                  </p>
                </div>
              );
            })}
          {search !== "" && filterCards?.length !== 0 ? (
            filterCards?.map((card) => {
              return (
                <div
                  key={card._id}
                  className="p-6 px-0 bg-gray-100 rounded-lg min-h-[150px] shadow-md border-gray-400 border-2 "
                >
                  <h3 className="font-semibold px-6 text-lg text-gray-800">
                    {card.title}
                  </h3>
                  <hr className="h-[1.5px] bg-gray-400 border-0" />
                  <p className="text-sm mt-2 px-6 md:text-base">
                    {card.description}
                  </p>
                </div>
              );
            })
          ) : (
            <>
              {search !== "" && (
                <div className=" col-span-2 m-auto">
                  <img
                    src="notfound.png"
                    alt=""
                    className="rounded-lg justify-center"
                  />
                </div>
              )}
            </>
          )}
        </div>
        {error && (
          <div className="flex items-center justify-center text-red-500 font-bold flex-col">
            <img src="server-error.avif" />
            {"Please see if backend is working properly."}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContainer;
