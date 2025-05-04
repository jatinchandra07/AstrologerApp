import React, { useState } from "react";
import { Link } from "react-router-dom";
import thumb1 from "../images/insta-thumbnails/th1.png";
import thumb2 from "../images/insta-thumbnails/th2.png";
import thumb3 from "../images/insta-thumbnails/th3.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videoUrls = [
  "https://www.instagram.com/reel/DHcrchhv3Nt/?igsh=MWF1bzRqaGlvOG8ydQ==",
  "https://www.instagram.com/reel/DFJ1UHlPnKr/?igsh=MWVtbjU0N2QwZ2g0OA==",
  "https://www.instagram.com/reel/DENAb7zvbgg/?igsh=NHQ5eXRzbzJkNDJy",
];

const FeaturedVideoEmbed = () => {
  const thumbnails = [
    thumb1,
    thumb2,
    thumb3,
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleThumbnailClick = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  const handlePrev = () => {
    const newIndex =
      startIndex - itemsPerPage < 0
        ? thumbnails.length - itemsPerPage
        : startIndex - itemsPerPage;
    setStartIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      startIndex + itemsPerPage >= thumbnails.length
        ? 0
        : startIndex + itemsPerPage;
    setStartIndex(newIndex);
  };

  const visibleThumbnails = thumbnails.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleOpenInNewTabToGoToChannel = (event) => {
    event.preventDefault();
    window.open(
      "https://www.instagram.com/mahakaalcosmicportal/",
      "_blank"
    );
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher ">
        Featured Videos
      </h1>
      <div className=" m-auto mt-6 mb-10 w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 relative ">
        {visibleThumbnails.map((thumbnail, index) => (
          <div className="m-auto" key={index}>
            <img className="border px-3 py-3"
              src={thumbnail}
              alt={`Thumbnail ${index + startIndex + 1}`}
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() =>
                handleThumbnailClick(videoUrls[index + startIndex])
              }
            />
          </div>
        ))}
        <div
          className="text-white absolute top-[35%] left-0 text-2xl p-2 group-hover:bg-black/20 cursor-pointer "
          onClick={handlePrev}
        >
        </div>
      </div>

      <Link to="#" onClick={handleOpenInNewTabToGoToChannel}>
        <button className="text-white bg-black hover:bg-transparent border border-black rounded-[4px] px-3 py-1 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black m-auto flex items-center mb-10">
          Visit Our Channel
        </button>
      </Link>
    </div>
  );
};
export default FeaturedVideoEmbed;