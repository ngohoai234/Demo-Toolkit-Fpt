import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import Products from "../../components/Products/Products";
import { fetchProducts } from "../../store/Products/actionsProducts";
import CardSkeleton from "../../UI/CardSkeleton/CardSkeleton";
import SkeletonParam from "../../UI/CardSkeleton/Skleton-Component/SkeletonParam";
import SkeletonTitle from "../../UI/CardSkeleton/Skleton-Component/SkeletonTitle";
const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Products />
    </>
  );
};

export default Home;
