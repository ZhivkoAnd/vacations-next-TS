"use client";
import ImageGallery from "react-image-gallery";

interface Props {
  images: {
    original: string;
    thumbnail: string;
  }[];
}

const ImagesGallery = ({ images }: Props) => {
  return <ImageGallery items={images} thumbnailPosition="left" />;
};

export default ImagesGallery;
