import { useGlobal } from "../../queries/useGlobal";
import Carousel from "react-multi-carousel";
import Spinner from "../spinner/Spinner";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 z-10 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-md hover:opacity-80 focus:outline-none"
    >
      ←
    </button>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 z-10 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-md hover:opacity-80 focus:outline-none"
    >
      →
    </button>
  );
};

function TransformationList({ items }) {
  const { transitions, isLoading } = useGlobal();

  if (isLoading) return <Spinner className="!h-[20vh] w-full" />;

  if (!items?.length) return;

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      containerClass="carousel-container"
      itemClass="px-2"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      className="py-[30px]"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative h-[300px] cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br from-[#000] to-primary"
        >
          {/* Primary Image */}
          <img
            src={item.img1}
            alt={item.name}
            className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
          />
          {/* Secondary Image */}
          <img
            src={item.img2}
            alt={`${item.name} hover`}
            className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <h3 className="mt-4 text-center font-medium">{item.name}</h3>
        </div>
      ))}
    </Carousel>
  );
}

export default TransformationList;
