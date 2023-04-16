import useUrls from "@/hooks/useUrls";
import { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";

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

  useEffect(() => {
    if (status === "success") {
      setShowPopup(true);
    }
  }, [status]);

  return (
    <>
      {showPopup && (
        <div
          className={`${
            status === "success" ? "bg-green-500" : "bg-red-500"
          } fixed bottom-0 right-0 mb-4 mr-4 text-white py-2 px-4 rounded-lg z-50`}
        >
          <p>Success! Your shortened url: {data}</p>
          <div className="hover:bg-green-600">
            <button onClick={handleCopyClick}>
              <FiCopy size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
