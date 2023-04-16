import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { useState } from "react";
import { ChangeEvent, MouseEvent } from "react";
import useUrls from "@/hooks/useUrls";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [urlInput, setUrlInput] = useState("");
  const { urls, urlStatus } = useUrls();

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
    setUrlInput(e.target.value);
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
      {renderUrls(urlStatus)}
    </main>
  );
}
