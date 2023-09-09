import React from "react";
import Frame from "@/components/frame/Frame";
import photoData, { Photos } from "../../../../utils/photos";

const PhotoModal = ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const photo: Photos = photoData.find((p) => p.id === photoId)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  );
};

export default PhotoModal;