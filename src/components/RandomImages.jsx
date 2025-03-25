import { useEffect, useState, useRef, useCallback } from "react";
import { getRandomPhotos } from "../api/privateApi";
import DownloadButton from "./DownloadButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, loadLikes } from "../store/likeSlice";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { toast } from "react-toastify";

const RandomImages = () => {
  const dispatch = useDispatch();
  const likedImages = useSelector((state) => state.likes.likedImages);

  const loadPhotosFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("savedPhotos")) || [];
  };

  const [photos, setPhotos] = useState(loadPhotosFromLocalStorage());
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    dispatch(loadLikes());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("savedPhotos", JSON.stringify(photos));
  }, [photos]);

  const fetchPhotos = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const data = await getRandomPhotos(30);
    setPhotos((prevPhotos) => {
      const uniquePhotos = [
        ...prevPhotos,
        ...data.filter(
          (newPhoto) => !prevPhotos.some((p) => p.id === newPhoto.id)
        ),
      ];
      return uniquePhotos;
    });
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    if (photos.length === 0) {
      fetchPhotos();
    }
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

  const handleLike = (imageId) => {
    dispatch(toggleLike(imageId));
    if (likedImages.includes(imageId)) {
      toast.error("Rasm sevimliylar ro‘yxatidan o‘chirildi");
    } else {
      toast.success("Rasm sevimliylar ro‘yxatiga qo‘shildi");
    }
  };

  const searchQuery = useSelector((state) => state.search.query.toLowerCase());

  const filteredPhotos = photos.filter((photo) =>
    photo.alt_description?.toLowerCase().includes(searchQuery)
  );

  return (
    <div
      className="py-10 mx-auto grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gridAutoFlow: "dense",
      }}
    >
      {filteredPhotos.length > 0
        ? filteredPhotos.map((photo, index) => {
            const uniqueKey = `${photo.id}-${index}`;
            const isLiked = likedImages.includes(photo.id);
            return (
              <div
                ref={index === filteredPhotos.length - 1 ? lastPhotoRef : null}
                key={uniqueKey}
                className="rounded-lg overflow-hidden shadow-lg relative"
              >
                <img
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="w-full h-full object-cover"
                />
                <button
                  className={"absolute top-2 right-2 px-4 py-2 rounded"}
                  onClick={() => handleLike(photo.id)}
                >
                  {isLiked ? (
                    <AiFillLike className="w-6 h-6 text-red-500" />
                  ) : (
                    <AiOutlineLike className="w-6 h-6 text-[#0F172A]" />
                  )}
                </button>
                <DownloadButton
                  url={photo.urls.full}
                  filename={`unsplash-${photo.id}.jpg`}
                />
              </div>
            );
          })
        : photos.length === 0 && !loading
        ? Array.from({ length: 10 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="flex w-full flex-col gap-4"
            >
              <div className="skeleton h-32 w-full"></div>
            </div>
          ))
        : null}
      {loading && <p className="text-center col-span-3">Yuklanmoqda...</p>}
    </div>
  );
};

export default RandomImages;
