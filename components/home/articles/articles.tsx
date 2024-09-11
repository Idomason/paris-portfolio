import Article from "./article";
import { articleData } from "@/data/data";

export default function Articles() {
  return (
    <div className="bg-gray-100 pb-20 pt-20">
      <div className="mx-auto w-4/5">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          My Latest Articles
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {articleData.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
