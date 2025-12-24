import logoImg from "../assets/logo.png"

const NavBar = () => {
  return (
    <div className="flex flex-col min-h-screen w-2/12 bg-green-600">
      <div className="w-50 h-50 py-20 px-10">
        <img src={logoImg}></img>
      </div>
      <div className="py-20 px-10">
        <ul>
            <li>DashBoard</li>
            <li>messages</li>
            <li>Report</li>
            <li>Setting</li>
            <li>privacy</li>
        </ul>
      </div>
      <div className="px-10">
        <button className="bg-white px-4 my-0.5 rounded-2xl ">LogOut</button>
      </div>
    </div>
  );
};

export default NavBar;
