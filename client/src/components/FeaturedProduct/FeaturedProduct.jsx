import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../Hooks/useFetch";
const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          repellendus aut minima similique autem iusto, voluptate sint dicta
          dolores quae! Esse nostrum minima aperiam saepe tempore dolores, illum
          consectetur eveniet.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "somthing went wrong"
          : loading
          ? "Loading.."
          : data?.map((product) => <Card product={product} key={product.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
