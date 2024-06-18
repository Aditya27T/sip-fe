"use client";
import React, { useState, useEffect } from "react";

import { initialData } from "@/app/api/laporan/data";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Search from "@/components/Search";
import SimplePagination from "@/components/Pagination";
import useDebounce from "@/hooks/debounce";

export default function page() {
  const [dataLaporan, setDataLaporan] = useState(initialData); // dumy data api
  const [searchLaporan, setSearchLaporan] = useState("");
  const [filteredDataLaporan, setFilteredDataLaporan] = useState([]);
  const debouncedSearchLaporan = useDebounce(searchLaporan, 500);
  const handleSearchChange = (event) => {
    setSearchLaporan(event.target.value);
  };

  const fetchData = async () => {
    try {
      // Fetch data mgkn nang kene ae dit, misal wis ana API
      // const response = await fetch('Link API');
      // if (!response.ok) {
      //     throw new Error('cannot fetch data from API');
      // }
      // const dataLaporan = await response.json();

      console.log(dataLaporan);

      const sortFilterLaporandata = dataLaporan
        // .filter((item) => item.type === selectedType)
        .sort(
          (recent, last) =>
            new Date(last.createdAt) - new Date(recent.createdAt)
        );

      setFilteredDataLaporan(sortFilterLaporandata);
    } catch (error) {
      console.error("error: ", error.message);
    }
  };

  useEffect(() => {
    const dataDebouce = dataLaporan
      .filter((item) =>
        item.namaBarang
          .toLowerCase()
          .includes(debouncedSearchLaporan.toLowerCase())
      )
      .sort(
        (recent, last) => new Date(last.createdAt) - new Date(recent.createdAt)
      );

    setFilteredDataLaporan(dataDebouce);
  }, [debouncedSearchLaporan, dataLaporan]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" container mt-40 mx-auto">
        <Search
          className="peer h-full max-w-96 min-w-96 bg-gray-300 rounded-sm outline-2 text-sm text-gray-700 px-4 py-2"
          type="text"
          id="search"
          placeholder="Search"
          value={searchLaporan}
          onChange={handleSearchChange}
        />
        {/* Laporan Data */}
        <div className="w-full h-auto mt-16 flex flex-wrap justify-between items-center gap-[14px]">
          {filteredDataLaporan.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <SimplePagination />
      </div>
    </div>
  );
}
