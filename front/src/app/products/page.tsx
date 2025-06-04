import { IProduct } from "@/interfaces/IProduct";
import { getProducts } from "@/services/productService";
import Card from "@/components/Card";

const Products = async () => {
  const productsFound: IProduct[] = await getProducts();

  const cantidad = productsFound.length;

  console.log(cantidad);

  return (
    <main>
      <h1>Products</h1>
      <hr />
      <br />
      {/* {productsFound.map((product: IProduct) => (
        <div key={product.id}>
          <Card product={product} />
        </div>
      ))} */}
    </main>
  );
};

export default Products;
