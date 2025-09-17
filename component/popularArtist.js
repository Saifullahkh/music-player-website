import Image from "next/image";
import React from "react";



function PopularArtist({ image, name }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={name}
        width={130}
        height={130}
        className="rounded-full object-cover"
      />
      <h3 className="mt-2 text-[16px] font-medium text-white truncate">
        {name}
      </h3>
    </div>
  );
}

export default PopularArtist;
