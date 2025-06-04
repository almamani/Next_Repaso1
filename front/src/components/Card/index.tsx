import Image from "next/image";
import { IProduct } from "@/interfaces/IProduct";

const Card = ({ product }: { product: IProduct }) => {
  <div className="m-6 p-4 bg-white-basic border border-gray-light rounded-lg text-black-light hover:shadow-lg transition-shadow">
    <Image src={product.image} alt={product.name} width={380} heigth={380} />
    <div className="mt-4 text-ceter">
      <p className="font-semibold mt-2">{product.name}</p>
      <h3 className="font-semibold text-ocean-basic ">{product.price}</h3>
    </div>
  </div>;
};

export default Card;
