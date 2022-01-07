import { Col, Row } from "react-bootstrap";
import { SkeletonTheme } from "react-loading-skeleton";

const CardSkeleton = (props) => {
  const { row = 1, column = 1 } = props;

  const handleRenderSkeletonColumn = () => {
    const list = [];
    // row = 2, column = 4
    for (let i = 0; i < column; i++) {
      list.push(
        <Col className={`col-${12 % column}`} key={i}>
          {props.children}
        </Col>
      );
    }
    return list;
  };
  const handleRenderSkeletonRow = () => {
    const listRow = [];
    for (let i = 0; i < row; i++) {
      listRow.push(
        <Row className={`${props.classRow}`} key={i}>
          {handleRenderSkeletonColumn()}
        </Row>
      );
    }

    return listRow;
  };

  return <SkeletonTheme>{handleRenderSkeletonRow()}</SkeletonTheme>;
};

export default CardSkeleton;
