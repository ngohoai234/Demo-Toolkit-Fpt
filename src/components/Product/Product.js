import "./Product.css";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Product = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <div
      className="product"
      onClick={() => {
        navigate(`/product/${data.id}`);
      }}
    >
      <img
        src={`${data.image}`}
        alt="product-img"
        className="img-fluid product__img"
      />
      <div className="product__stars d-flex align-items-center mt-3">
        <AiFillStar className="product__star" />
        <AiFillStar className="product__star" />
        <AiFillStar className="product__star" />
        <AiFillStar className="product__star" />
        <p className="mb-0 ">(`${data.rating.rate}` Reviewed)</p>
      </div>
      <p className="product__name mt-3">{data.title}</p>
      <p className="product__price text-bold">{data.price}</p>
    </div>
  );
};

export default Product;
