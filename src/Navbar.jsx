const Navbar = ({
  YoutubeLogo,
  UserLogo,
  Hamburger,
  SearchIcon,
  VideoIcon,
  Bell,
  Mic,
}) => {
  return (
    <div className="flex justify-between align-middle h-14 fixed top-0 left-0 right-0 z-10 bg-white">
      {/* Youtube Logo Part */}
      <div className="flex items-center w-60">
        <button className="h-10 w-10 ml-5 mr-5 rounded-full hover:bg-slate-300 ">
          <img src={Hamburger} alt="Hamburger" className="h-6 mx-auto" />
        </button>
        <img src={YoutubeLogo} alt="Youtube Logo" className="h-5" />

        <span className="text-[10px] mt-4 ml-1 mb-9">PH</span>
      </div>

      {/* Search Box Part */}
      <div className="flex flex-1 items-center justify-center sm:mr-[70px] ml-[35px] sm:w-full sm:max-w-[730px]">
        <input
          type="search"
          placeholder="Search"
          className="hidden sm:block flex-1 w-0 px-3 py-3 rounded-l-full h-[40px] border-[1px] border-[#ccc] shadow-inner pl-4 focus:outline-none focus:border-blue-700"
        />
        <button className="h-[40px] w-[60px] border-[1px] mr-3 border-[#ccc] bg-[#f8f8f8] border-l-0 rounded-r-full hidden hover:bg-[#e2e2e2] sm:block">
          <img src={SearchIcon} className="h-[25px] mx-auto"></img>
        </button>
        <button className="h-[42px] w-[42px] bg-[#f8f8f8] hover:bg-[#e2e2e2] rounded-full hidden sm:block">
          <img src={Mic} className="h-[21px] mx-auto"></img>
        </button>
      </div>

      {/* Yung gilid na may User icon */}
      <div className="flex shrink-0 items-center justify-between mr-5 w-[160px]">
        <button className="h-[42px] w-[42px] rounded-full sm:hidden hover:bg-[#f8f8f8]">
          <img src={SearchIcon} className="h-[21px] mx-auto"></img>
        </button>
        <button className="h-[42px] w-[42px] rounded-full hover:bg-[#f8f8f8]">
          <img src={VideoIcon} className="h-[21px] mx-auto"></img>
        </button>
        <button className="h-[42px] w-[42px] rounded-full hover:bg-[#f8f8f8]">
          <img src={Bell} className="h-[21px] mx-auto"></img>
        </button>
        <button className="p-1">
          <img src={UserLogo} className="h-8 rounded-full"></img>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
