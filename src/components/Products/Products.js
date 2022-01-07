import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { productsAct } from "../../store/Products";
import { fetchProducts } from "../../store/Products/actionsProducts";
import CardSkeleton from "../../UI/CardSkeleton/CardSkeleton";
import SkeletonParam from "../../UI/CardSkeleton/Skleton-Component/SkeletonParam";
import SkeletonTitle from "../../UI/CardSkeleton/Skleton-Component/SkeletonTitle";
import Product from "../Product/Product";

const Products = () => {
  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();
  const renderListProducts = () => {
    return products.map((product) => (
      <Col className="col-3" key={product.id}>
        <Product data={product} />
      </Col>
    ));
  };
  useEffect(() => {
    // thunk action creator -> thunk action creator function -> have plain action creator
    dispatch(fetchProducts(5));
    console.log(productsAct);
  }, [dispatch]);
  if (loading) {
    return (
      <Container>
        <CardSkeleton column={4} row={4} classRow="gy-5 gx-4 mb-5">
          <Skeleton height={"13rem"} />
          <SkeletonTitle />
          <SkeletonParam />
          <SkeletonTitle />
        </CardSkeleton>
      </Container>
    );
  }
  if (error && !loading) {
    return <h1 className="text-center">Lỗi</h1>;
  }
  return (
    <div className="products">
      <Container>
        <Row className="gy-5 gx-5"> {renderListProducts()}</Row>
      </Container>
    </div>
  );
};

export default Products;
