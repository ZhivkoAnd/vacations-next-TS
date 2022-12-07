"use client";
import ImageGallery from "react-image-gallery";

interface Props {
  images: [];
}

const ImagesGallery: React.FC<Props> = ({ images }) => {
  return <ImageGallery items={images} thumbnailPosition="left" />;
};

export default ImagesGallery;
