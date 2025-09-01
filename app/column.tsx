//- app/column.tsx

import Link from "next/link";
import Image from "next/image";
import { SquarePen, Star } from "lucide-react";

export const imageColumnSize = 130;

export const ratingColumnHeader = 'Rating';
export const ratingColumnSize = 110;

export const actionColumnKey = 'action';
export const actionColumnHeader = 'Action';
export const actionColumnSize = 90;

export const iconSize = 16;
export const imageWidth = 72;
export const imageHeight = 72;

interface CellImageProps {
  src: string;
  alt: string;
};
export const CellImage = ({ src, alt }: CellImageProps) => {
  return (
    <Image
      priority={true}
      src={src}
      alt={alt}
      className="talbe-image-td"
      width={imageWidth}
      height={imageHeight}
    />
  );
};

interface CellRatingProps {
  rating: number;
};
export const CellRating = ({ rating }: CellRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      <Star size={iconSize} className="text-yellow-400" fill="gold" />
      <span>{rating}</span>
    </div>
  );
};

interface ActionEditProps {
  path: string;
};
export const ActionEdit = ({ path }: ActionEditProps) => {
  return (
    <Link title="Edit" href={path} className="group hover:text-sky-600">
      <div className="table-icon-td">
        <SquarePen size={iconSize} />
        <span className="group-hover:underline">Edit</span>
      </div>
    </Link>
  );
};
