import Image from "next/image";
import Link from "next/link";
import { React, useState, useEffect } from "react"


const ProductCard = ({ item }) => {
  const [imageUrl, setImageUrl] = useState("");
  
  useEffect(() => {
    fetch(item.image)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch((error) => {
        console.error(error);
        // Manejar el error aquí, por ejemplo, mostrando un mensaje de error al usuario
      });
  }, [item.image]);
  
  return (
    <article className="basis-72 shadow-lg rounded">
      <Link href={`/productos/detail/${item.slug}`} className="m-6">
        <div className="px-4 border-t border-gray-200 pb-4">
          <h4 className="text-sm my-4">{item.title}</h4>
          <p className="text-2xl font-semibold">${item.price}</p>
        </div>
        <Image
          alt={item.title}
          src={`${item.image}`}
          width={288}
          height={288}
          />
      </Link>
    </article>
  );
};
export default ProductCard;