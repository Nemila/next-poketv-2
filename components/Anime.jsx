import Image from "next/image";
import Link from "next/link";
import React from "react";

const Anime = ({ anime }) => {
  const { id, title, image } = anime;
  return (
    <Link href={`/watch/${id}`}>
      <Image src={image} width={100} height={150} alt="" priority />
      <p>{title.english ? title.english : title.native}</p>
    </Link>
  );
};

export default Anime;
