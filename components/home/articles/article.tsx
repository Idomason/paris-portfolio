import Image from "next/image";
import { IArticleProp } from "@/utils/types";
import { BiHeart } from "react-icons/bi";

export default function Article({ article }: IArticleProp) {
  return (
    <div className="overflow-hidden rounded-lg bg-white">
      {/* Cover Image */}
      <Image
        className="w-full"
        src={article.coverImage}
        width={300}
        height={300}
        alt={article.title}
      />
      <div className="p-5">
        {/* Authors and Reaction */}
        <div className="justify-be flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              className="rounded-full"
              src={article.userImage}
              width={40}
              height={40}
              alt={article.username}
            />
            <p className="text-base text-black/70">{article.username} </p>
          </div>
          <div className="flex items-center space-x-2">
            <BiHeart className="text-red-600" />
            <p className="text-sm text-gray-800">{article.reaction}</p>
          </div>
        </div>
        {/* Heading */}
        <h1 className="mb-4 mt-4 text-xl font-semibold">{article.title}</h1>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          quia aperiam aliquam beatae alias praesentium dolor.
        </p>
        <button className="mb-3 mt-4 text-lg font-bold text-black underline hover:text-green-600">
          Read More
        </button>
      </div>
    </div>
  );
}
