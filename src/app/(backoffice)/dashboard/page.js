"use client";
import React from "react";

export default function addLaporan() {
  return (
    <form className="w-full">
      <div class="space-y-12">
        <div class="pb-12">
          <h2 class="text-[30px] font-semibold leading-7 text-gray-900">
            Data Laporan
          </h2>
        </div>
        <table class="table-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nama Barang</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Malcolm Lockyer</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}
