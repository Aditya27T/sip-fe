"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { initialData } from "@/app/api/laporan/data";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Search from "@/components/Search";
import Card from "@/components/Card";
import useDebounce from "@/hooks/debounce";
import styles from "@/app/home/home.module.css";

export default function Main() {
  const [dataLaporan, setDataLaporan] = useState(initialData); // ini bisa dihapus nanti ketika data sudah ada dari API
  const [selectedType, setSelectedType] = useState("kehilangan");
  const [filteredDataLaporan, setFilteredDataLaporan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data dari API nanti di sini
        // const response = await fetch('Link API');
        // if (!response.ok) {
        //     throw new Error('cannot fetch data from API');
        // }
        // const dataLaporan = await response.json();

        const sortFilterLaporandata = dataLaporan
          .filter(item => item.type === selectedType)
          .sort((recent, last) => new Date(last.createdAt) - new Date(recent.createdAt));

        setFilteredDataLaporan(sortFilterLaporandata);
      } catch (error) {
        console.error('error: ', error.message);
      }
    };

    fetchData();
  }, [dataLaporan, selectedType]); // nanti dataLaporan ini dihapus ketika get data sudah dari API

  useEffect(() => {
    const dataDebouce = dataLaporan
      .filter(item => item.type === selectedType && item.namaBarang.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
      .sort((recent, last) => new Date(last.createdAt) - new Date(recent.createdAt));

    setFilteredDataLaporan(dataDebouce);
  }, [debouncedSearchTerm, selectedType, dataLaporan]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        <section id="hero" className={`${styles.backgroundRadial} w-full h-screen flex justify-center items-center`}>
          <div className="w-full flex flex-col gap-[20px] md:gap-[60px] justify-center items-center">
            <h1 className="text-center text-2xl sm:text-4xl md:text-6xl mx-[20px] sm:mx-[20px] lg:mx-[200px] xl:mx-[290px] leading-[30px] sm:leading-[40px] md:leading-[80px]">Revolutionize Your Inventory with Smart <span className="text-[#00408A]">SIP Reporting</span></h1>
            {/* Di sini handle login, misal belum login / session / token tidak ada, harus login dulu */}
            <Link href="/dashboard">
              <Button className="w-[150px] md:w-[200px] h-[40px] md:h-[60px] font-normal rounded-[32px] bg-[#00408A] text-center text-sm md:text-xl text-white">
                Report Now
              </Button>
            </Link>
          </div>
        </section>

        <section id="laporan" className={`${styles.backgroundRadial} w-full h-auto flex justify-center items-center py-16`}>
          <div className="container mx-auto">
            <div className="w-full h-auto flex flex-col gap-[30px]">
              <div className="w-full h-auto flex flex-col justify-start gap-[30px]">
                {/* Option */}
                <div className="w-full h-auto flex justify-center lg:justify-start">
                  <ul className="flex items-center gap-5">
                    <li
                      className={`text-xs sm:text-base md:text-2xl font-medium cursor-pointer ${selectedType === 'kehilangan' ? 'underline underline-offset-[5px] sm:underline-offset-[10px] text-[#00408A]' : 'text-[#8F8F8F]'}`}
                      onClick={() => handleTypeChange('kehilangan')}
                    >
                      Kehilangan
                    </li>
                    <li
                      className={`text-xs sm:text-base md:text-2xl font-medium cursor-pointer ${selectedType === 'kerusakan' ? 'underline underline-offset-[5px] sm:underline-offset-[10px] text-[#00408A]' : 'text-[#8F8F8F]'}`}
                      onClick={() => handleTypeChange('kerusakan')}
                    >
                      Kerusakan
                    </li>
                  </ul>
                </div>
                {/* Search */}
                <div className="w-full lg:max-w-md rounded-[10px] border-2">
                  <div className="relative flex items-center w-full h-[40px] sm:h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <Search className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
                  </div>
                </div>
              </div>
              {/* Laporan Data */}
              <div className="w-full h-auto flex flex-wrap justify-between items-center gap-[14px]">
                {filteredDataLaporan.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}