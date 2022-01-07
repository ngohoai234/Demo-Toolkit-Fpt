import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../store/Products/actionsProducts";

const Detail = () => {
  const { idProduct } = useParams();
  const data = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(idProduct));
  }, [dispatch, idProduct]);

  return (
    <div>
      <Container>
        <Row className="gx-5 gy-4 gx-5 gy-4 d-flex align-items-center">
          <Col className="col-6">
            {data && (
              <img className="img-fluid" alt="product-img" src={data.image} />
            )}
            {!data && <Skeleton height={500} />}
          </Col>
          <Col className="col-6">
            <Skeleton height={"1.3rem"} className="mb-3" />
            <Skeleton height={"1.3rem"} className="mb-3" />
            <Skeleton height={"1.3rem"} className="mb-3" />
            <Skeleton height={"1.3rem"} className="mb-3" />
            <Skeleton height={"1.3rem"} className="mb-3" />
            <Skeleton height={"1.3rem"} className="mb-3" />
            <Skeleton height={"1.3rem"} className="mb-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
