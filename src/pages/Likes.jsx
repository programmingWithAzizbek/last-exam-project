import React from "react";
import { useSelector } from "react-redux";

const Likes = () => {
  const likedImages = useSelector((state) => state.likes.likedImages);
  const savedPhotos = JSON.parse(localStorage.getItem("savedPhotos")) || [];

  const likedPhotos = savedPhotos
    .filter((photo) => likedImages.includes(photo.id))
    .filter(
      (photo, index, self) => index === self.findIndex((p) => p.id === photo.id)
    );

  return (
    <div
      className="py-10 mx-auto grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gridAutoFlow: "dense",
      }}
    >
      {likedPhotos.length > 0 ? (
        likedPhotos.map((photo) => (
          <div
            key={photo.id}
            className="rounded-lg overflow-hidden shadow-lg relative"
          >
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              className="w-full h-full object-cover"
            />
          </div>
        ))
      ) : (
        <p className="text-center col-span-3">
          Hozircha yoqtirilgan rasmlar yo‘q.
        </p>
      )}
    </div>
  );
};

export default Likes;
