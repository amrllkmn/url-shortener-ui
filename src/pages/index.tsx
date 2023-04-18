import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { useState } from "react";
import { ChangeEvent, MouseEvent } from "react";
import useUrls from "@/hooks/useUrls";
import Popup from "@/components/Popup";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [urlInput, setUrlInput] = useState("");
  const [slugInput, setSlugInput] = useState("");
  const {
    urls,
    urlStatus,
    urlMutate,
    urlMutateData,
    urlMutateStatus,
    urlMutateReset,
  } = useUrls();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (/^https?:\/\//.test(urlInput)) {
      urlMutate({ url: urlInput, slug: slugInput });
      setUrlInput("");
      setSlugInput("");
    } else {
      alert("Invalid URL");
    }

    // Add logic to handle form submission here
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
  };

  const handleSlugChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSlugInput(e.target.value);
  };

  const renderUrls = (urlStatus: string) => {
    switch (urlStatus) {
      case "loading":
        return <div>Loading...</div>;
      case "error":
        return <div>Something</div>;
      default:
        return (
          <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left font-mono">
            {urls &&
              urls.map((url, index) => {
                return <Card url={url} key={index} />;
              })}
          </div>
        );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white text-3xl font-bold">URL Shortener</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex items-center mb-4 max-w-5xl w-full">
          <input
            type="text"
            value={urlInput}
            onChange={handleInputChange}
            className="px-3 py-2 mr-2 w-full border-gray-400 text-gray-600 border rounded-md focus:outline-none focus:border-blue-700"
            placeholder="Enter a URL"
          />
          <input
            type="text"
            value={slugInput}
            onChange={handleSlugChange}
            className="px-3 py-2 mr-2 w-1/3 border-gray-400 text-gray-600 border rounded-md focus:outline-none focus:border-blue-700"
            placeholder="Optional slug"
          />
          <button
            onClick={handleSubmit}
            className="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Shorten URL
          </button>
        </div>
      </div>
      <Popup
        status={urlMutateStatus}
        data={urlMutateData}
        reset={urlMutateReset}
      />
      {renderUrls(urlStatus)}
    </main>
  );
}
