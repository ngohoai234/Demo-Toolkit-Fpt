import Skeleton from "react-loading-skeleton";

const SkeletonParam = (props) => {
  const { width = "70%", height = 15, className } = props;

  return <Skeleton width={width} height={height} className={className} />;
};

export default SkeletonParam;
