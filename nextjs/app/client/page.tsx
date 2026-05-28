"use client";

import React, { useEffect, useState } from "react";

const ClientPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
      );
      const data = await res.json();
      console.log(data);
      setData(data.data.data[0].name.first);
    }
    fetchData();
  }, []);
  return (
    <div>
      <button onClick={() => alert("Hello World!")}>Click me</button>
      <p>{data}</p>
    </div>
  );
};

export default ClientPage;
