import useUrls from "@/hooks/useUrls";
import { useEffect, useState } from "react";
import { FiCopy, FiCheckCircle, FiXCircle, FiClipboard } from "react-icons/fi";

interface PopupProps {
  status: string;
  data: any;
  reset: () => void;
}

const Popup = ({ status, data, reset }: PopupProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const MAX_LENGTH = 140;

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(data.short_url);
    setShowPopup(false);
    reset();
  };

  const truncateUrl = (url: string, MAX_LENGTH: number) => {
    if (url.length > MAX_LENGTH) {
      return url.slice(0, MAX_LENGTH - 3) + "...";
    }
    return url;
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (status === "success" || status === "loading") {
      setShowPopup(true);
    }
  }, [status]);

  return (
    <>
      {showPopup && (
        <div className="flex">
          <div
            className={`${
              status === "success"
                ? "bg-green-500"
                : status === "loading"
                ? "bg-blue-500"
                : "bg-red-500"
            } mb-4 mr-0 text-white px-4 py-4 rounded-l-lg z-50 flex items-center`}
          >
            {status === "success" ? (
              <div>
                {data.title ? <p> Title: {data.title}</p> : ""}
                <p> Target URL: {truncateUrl(data.target_url, MAX_LENGTH)} </p>
                <p> Your shortened url: {data.short_url}</p>
              </div>
            ) : status === "loading" ? (
              "Fetching your URL..."
            ) : (
              "Something went wrong"
            )}
          </div>
          <div
            className={`${
              status === "success"
                ? "bg-green-500 hover:bg-green-600"
                : status === "loading"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-red-500 hover:bg-red-600"
            } mb-4 mr-4 text-white py-2 px-4 rounded-r-lg z-50 flex items-center`}
          >
            {status === "success" && (
              <div className="rounded-sm">
                <button onClick={handleCopyClick}>
                  <FiClipboard size={20} />
                </button>
              </div>
            )}

            {status === "error" && (
              <div className="rounded-sm">
                <button onClick={handleCloseClick}>
                  <FiXCircle size={20} />
                </button>
              </div>
            )}

            {status === "loading" && (
              <div className="rounded-sm">
                <button onClick={handleCloseClick}>
                  <FiXCircle size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
