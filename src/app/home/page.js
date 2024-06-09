"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import styles from "@/app/home/home.module.css";

const data = [
    { id: 1, namaUser: "User 1", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Laptop Dell XPS 13", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "kehilangan", vote: 0 },
    { id: 2, namaUser: "User 2", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Keyboard Mechanical", deskripsi: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "kerusakan", vote: 5 },
    { id: 3, namaUser: "User 3", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Mouse Wireless", deskripsi: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", type: "kehilangan", vote: 10 },
    { id: 4, namaUser: "User 4", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Monitor 4K", deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", type: "kerusakan", vote: 20 },
    { id: 5, namaUser: "User 5", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Printer Laser", deskripsi: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", type: "kehilangan", vote: 13 },
    { id: 6, namaUser: "User 6", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Smartphone", deskripsi: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", type: "kerusakan", vote: 7 },
    { id: 7, namaUser: "User 7", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Tablet", deskripsi: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", type: "kehilangan", vote: 3 },
    { id: 8, namaUser: "User 8", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Headphones", deskripsi: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", type: "kerusakan", vote: 15 },
    { id: 9, namaUser: "User 9", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Webcam", deskripsi: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", type: "kehilangan", vote: 2 },
    { id: 10, namaUser: "User 10", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "Microphone", deskripsi: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?", type: "kerusakan", vote: 8 },
    { id: 11, namaUser: "User 11", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg", namaBarang: "Router", deskripsi: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", type: "kehilangan", vote: 54 },
    { id: 12, namaUser: "User 12", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg", namaBarang: "External Hard Drive", deskripsi: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.", type: "kerusakan", vote: 92 }
];

export default function Trending() {
    const router = useRouter();
    const sortedData = data.sort((a, b) => b.vote - a.vote);

    return (
        <>
            <Navbar />
            <main className="w-full h-auto">
                <section id="laporan" className="w-full h-auto flex justify-center items-center pt-[130px] pb-[50px]">
                    <div className="container mx-auto">
                        <div className="w-full h-auto flex flex-col gap-[30px]">
                            {/* Search */}
                            <div className="w-full lg:max-w-md rounded-[10px] border-2">
                                <div className="relative flex items-center w-full h-[40px] sm:h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                    <div className="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <Search className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search" />
                                </div>
                            </div>
                            {/* Data Card kehilangan */}
                            <div className="w-full h-auto flex flex-wrap justify-between items-center gap-[14px]">
                                {sortedData.map((item, index) => (
                                    <div key={index} className="w-full md:max-w-[345px] lg:max-w-[415px] h-[400px] md:h-[257px] lg:h-[296px] flex flex-col gap-2 p-3 border-2 rounded-[10px] bg-white">
                                        <div className="w-full h-auto flex justify-between items-center">
                                            <h3 className="text-base font-medium">{item.namaUser}</h3>
                                            <p className={`w-[63px] text-center text-xs py-[4px] rounded-[8px] text-[#666666] ${item.status === 'Pending' ? 'bg-[#ffe60549]' : 'bg-[#1aff055c]'}`}>{item.status}</p>
                                        </div>
                                        <Image
                                            src={item.thumbnail}
                                            width={382}
                                            height={151}
                                            alt="Thumbnail kehilangan"
                                            responsive="true"
                                            loading="lazy"
                                            className="w-full h-[250px] md:h-[105px] lg:h-[140px] !mt-[8px] object-cover rounded-[5px]"
                                        />
                                        <h2 className="text-sm lg:text-base font-bold">{item.namaBarang}</h2>
                                        <p className={`${styles.kehilanganCardDescription} text-xs text-[#858585] overflow-hidden`}>{item.deskripsi}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
