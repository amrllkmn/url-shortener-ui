import React, { useState } from "react";
import { IUrl } from "@/utils";
import Report from "./Report";
import Link from "next/link";

interface CardProps {
  url: IUrl;
}
const Card = ({ url }: CardProps) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const click_timestamp = Object.values(url.click_timestamp);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-2 mb-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-800 mb-2 hover:text-blue-700">
          <Link href={url.short_url} target="_blank" rel="noopener noreferrer" className="break-all">
            {url.short_url}
          </Link>
        </div>
        <p className="text-gray-700 text-base break-all">{url.target_url}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          {!clicked ? "Toggle" : "Close"} Report
        </button>
        {clicked && (
          <Report
            origins={url.origin}
            click_timestamp={click_timestamp}
            clicks={url.times_clicked}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
