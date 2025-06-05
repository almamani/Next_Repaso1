import { getProductById } from "@/services/productService";
import Detail from "../../../components/Detail/index";

interface PageProps {
  params: {
    id: string;
  };
}

const Product = async ({ params }: PageProps) => {
  const { id } = await params;
  const productFind = await getProductById(parseInt(id));

  /* if (!productFind) {
    return notFound();
  } */

  return (
    <div>
      <h1>{productFind.name}</h1>
      <hr />
      <br />
      <Detail product={productFind} />
    </div>
  );
};

export default Product;
