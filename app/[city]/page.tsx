import React from "react";
// import Image from "next/image";
import { fetchVacationsServer } from "../components/utils/FetchQueryServer";
import ImagesGallery from "./ImagesGallery";

interface Vacations {
  items: {
    fields: {
      date?: Date;
      title?: string;
      slug?: string;
      gallery?: {}[];
    };
  }[];
}

interface Vacation {
  fields: any;
}

interface Image {
  fields: {
    file: {
      url: string;
    };
  };
}

interface Slug {
  fields: {
    slug?: string;
  };
}

interface City {
  params: {
    city: string;
  };
}

const Gallery = async ({ params: { city } }: City) => {
  const vacations: Vacations = await fetchVacationsServer();
  console.log(vacations);

  const vacation: Vacation = vacations.items.find(
    (item) => item.fields.slug === city
  );

  const images = vacation.fields.gallery.map((image: Image) => {
    return {
      original: `https:${image.fields.file.url}`,
      thumbnail: `https:${image.fields.file.url}`,
    };
  });

  return (
    <>
      <h1 className="title-main">{vacation.fields.title}</h1>
      <div className="vacation-panels">
        <ImagesGallery images={images} />
      </div>
      {/* <div className="vacation-panels-grid">
        {vacation.fields.gallery.map((image, index) => {
          return (
            <Image
              src={`https:${image.fields.file.url}`}
              alt={`${vacation.fields.slug} gallery image`}
              width={200}
              height={150}
              key={index}
            />
          );
        })}
      </div> */}
    </>
  );
};

export default Gallery;

export async function generateStaticParams() {
  const vacations = await fetchVacationsServer();

  return vacations.items.map((item: Slug) => ({
    city: item.fields.slug,
  }));
}
