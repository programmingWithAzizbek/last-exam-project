import { FaDownload } from "react-icons/fa";

const DownloadButton = ({ url, filename = "image.jpg" }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-white rounded-lg absolute bottom-2 right-3"
      >
        <FaDownload />
      </button>
    </>
  );
};

export default DownloadButton;
