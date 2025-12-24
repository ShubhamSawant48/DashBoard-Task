import profile from "../assets/profile.png";

const UpperBody = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-105 px-4 py-2 rounded-full border text-sm"
      />

      <div className="flex items-center gap-4 bg-[#2f7d6d] px-4 py-2 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white placeholder-white text-sm"
        />
        <span>🔔</span>
        <img src={profile} className="w-7 h-7 rounded-full bg-white" />
      </div>
    </div>
  );
};

export default UpperBody;
