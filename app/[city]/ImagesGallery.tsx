"use client";
import ImageGallery from "react-image-gallery";

interface Props {
  images: [];
}

const ImagesGallery: React.FC<Props> = ({ images }) => {
  console.log(images, "gallery");
  return <ImageGallery items={images} thumbnailPosition="left" />;
};

export default ImagesGallery;
