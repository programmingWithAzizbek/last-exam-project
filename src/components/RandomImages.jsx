import { useEffect, useState, useRef, useCallback } from "react";
import { getRandomPhotos } from "../api/privateApi";
import DownloadButton from "./DownloadButton";

const RandomImages = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchPhotos = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const data = await getRandomPhotos(30);
    setPhotos((prevPhotos) => [...prevPhotos, ...data]);
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const lastPhotoRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchPhotos();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, fetchPhotos]
  );

  return (
    <div className="py-10 grid grid-cols-3 gap-4">
      {photos.length > 0
        ? photos.map((photo, index) => {
            if (index === photos.length - 1) {
              return (
                <div
                  ref={lastPhotoRef}
                  key={photo.id}
                  className="rounded-lg overflow-hidden shadow-lg relative"
                >
                  <img
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    className="w-full h-48 object-cover"
                  />
                  <DownloadButton
                    url={photo.urls.full}
                    filename={`unsplash-${photo.id}.jpg`}
                  />
                </div>
              );
            }
            return (
              <div
                key={photo.id}
                className="rounded-lg overflow-hidden shadow-lg relative"
              >
                <img
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="w-full h-48 object-cover"
                />
                <DownloadButton
                  url={photo.urls.full}
                  filename={`unsplash-${photo.id}.jpg`}
                />
              </div>
            );
          })
        : Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex w-full flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
            </div>
          ))}
      {loading && <p className="text-center col-span-3">Yuklanmoqda...</p>}
    </div>
  );
};

export default RandomImages;
