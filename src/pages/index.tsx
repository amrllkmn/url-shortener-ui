import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { useState } from "react";
import { ChangeEvent, MouseEvent } from "react";

const inter = Inter({ subsets: ["latin"] });
const newTestData = Array.from({ length: 10 }, () => ({
  id: 2,
  target_url: "https://www.wikipedia.com",
  slug: "1431cf",
  created_at: "2023-04-14T14:13:12.727Z",
  updated_at: "2023-04-15T10:12:05.155Z",
  times_clicked: 4,
  click_timestamp: {
    "1": "2023-04-14 22:21:19 +0800",
    "2": "2023-04-15 18:08:15 +0800",
    "3": "2023-04-15 18:11:04 +0800",
    "4": "2023-04-15 18:12:05 +0800",
  },
  origin: [
    {
      city: "Kuala Lumpur",
      region: "Kuala Lumpur",
      country: "Malaysia",
    },
    {
      city: "Kuala Lumpur",
      region: "Kuala Lumpur",
      country: "Malaysia",
    },
    {
      city: "Kuala Lumpur",
      region: "Kuala Lumpur",
      country: "Malaysia",
    },
    {
      city: "Kuala Lumpur",
      region: "Kuala Lumpur",
      country: "Malaysia",
    },
  ],
  short_url: "http://localhost:3000/1431cf",
}));
export default function Home() {
  const [urlInput, setUrlInput] = useState("");

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(urlInput);
    if (/^https?:\/\//.test(urlInput)) {
      alert("Valid URL");
      setUrlInput("");
    } else {
      alert("Invalid URL");
    }

    // Add logic to handle form submission here
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUrlInput(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white text-3xl font-bold">URL Shortener</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <form className="flex items-center justify-between mb-4 max-w-5xl w-full">
          <input
            type="text"
            value={urlInput}
            onChange={handleInputChange}
            className="px-3 py-2 mr-2 w-full border-gray-400 text-gray-600 border rounded-md focus:outline-none focus:border-blue-700"
            placeholder="Enter a URL"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Shorten URL
          </button>
        </form>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left font-mono">
        {newTestData.map((url, index) => {
          return <Card url={url} key={index} />;
        })}
      </div>
    </main>
  );
}
