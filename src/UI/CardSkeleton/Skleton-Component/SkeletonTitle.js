import Skeleton from "react-loading-skeleton";

const SkeletonTitle = (props) => {
  const { width = "100%", height = 25 } = props;
  return <Skeleton width={width} height={height} />;
};

export default SkeletonTitle;
