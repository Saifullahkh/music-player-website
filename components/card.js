import Image from "next/image";

// Prop types can be documented using PropTypes or JSDoc in JS files.

export default function SongCard({ image, title, artist, viewer, noPadding = false, width }) {
  return (
    <div
      className={`w-40 rounded-xl bg-neutral-800 cursor-pointer ${
        noPadding ? "" : "p-2"
      }`}
      style={{ width: width || "100%" }}
    >
      {/* Image */}
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Text Section */}
      <div className={noPadding ? "mt-2" : "mt-2"}>
        <h3 className="text-[16px] font-medium text-white truncate ps-1">
          {title}
        </h3>
        <div className="flex justify-between items-center w-full ps-1">
          <p className="text-xs text-gray-400 truncate">{artist}</p>
          {viewer && (
            <p className="text-xs text-gray-400 truncate">{viewer}</p>
          )}
        </div>
      </div>
    </div>
  );
}
