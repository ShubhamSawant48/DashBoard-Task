import UpperBody from "./UpperBody";
import MainBody from "./MainBody";
import RightBody from "./RightBody";

const Body = () => {
  return (
    <div className="flex-1 bg-[#eef6f3] p-6">
      <UpperBody />

      <div className="flex gap-6">
        <MainBody />
        <RightBody />
      </div>
    </div>
  );
};

export default Body;
