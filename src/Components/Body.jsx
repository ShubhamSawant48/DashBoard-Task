import MainBody from "./MainBody";
import RightBody from "./RightBody";
import UpperBody from "./UpperBody";

const Body = () => {
  return (
    <div className="w-10/12 ml-4">
      <UpperBody />
      <div className="flex">
        <div className="w-9/12 border bg-gray-200 rounded-3xl">
          <MainBody />
        </div>
        <div className="w-full">
          <RightBody />
        </div>
      </div>
    </div>
  );
};

export default Body;
