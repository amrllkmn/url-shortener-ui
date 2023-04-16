import useUrls from "@/hooks/useUrls";
import { useEffect, useState } from "react";
import { FiCopy, FiCheckCircle, FiXCircle, FiClipboard } from "react-icons/fi";

interface PopupProps {
  status: string;
  data: string;
  reset: () => void;
}

const Popup = ({ status, data, reset }: PopupProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(data);
    setShowPopup(false);
    reset();
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (status === "success") {
      setShowPopup(true);
    }
  }, [status]);

  return (
    <>
      {showPopup && (
        <div className="flex">
          <div
            className={`${
              status === "success" ? "bg-green-500" : "bg-red-500"
            } mb-4 mr-0 text-white px-4 rounded-l-lg z-50 flex items-center`}
          >
            Success! Your shortened url: {data}
          </div>
          <div
            className={`${
              status === "success"
                ? "bg-green-500 hover:bg-green-600"
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
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
