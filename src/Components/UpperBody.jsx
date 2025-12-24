import profileImg from "../assets/profile.png";

const UpperBody = () => {
  return (
    <div className="flex py-4 px-10 gap-40 ">
      <input
        className="border border-2 border-black rounded-3xl ml-20 px-4 w-100"
        placeholder="Search"
      ></input>
      <div className="bg-green-500 px-3 rounded-lg flex gap-5 ml-50">
        <input
          className="border rounded-3xl my-2 px-4"
          placeholder="Search"
        ></input>
        <button>🔔</button>
        <img src={profileImg} className="w-6 h-5 my-2"></img>
      </div>
    </div>
  );
};

export default UpperBody;
