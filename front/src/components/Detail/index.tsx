"use client";
import Image from "next/image";
import { IProduct } from "@/interfaces/IProduct";

const Detail = ({ product }: { product: IProduct }) => {
  const handleBuy = () => {
    console.log("click en comprar");
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
        <div className="flex-shrink-0 w-full md:w-[380px] h-[400px]  bg-white-basic border border-gray-light rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={380}
            height={400}
          />
        </div>

        <div className="flex flex-col justify-between w-full md:w-[500px]">
          <div>
            <p className="text-gray-basic text-justify leading-relaxed mb-6 mt-12">
              {product.description}
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-pink-basic mb-6">
              ${product.price}
            </h3>
            <button className="button" onClick={handleBuy}>
              Buy Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
