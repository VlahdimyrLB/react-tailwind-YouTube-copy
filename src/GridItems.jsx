const GridItems = ({ item }) => {
  return (
    <div className="flex flex-col py-2">
      <div className="object-contain rounded-md bg-slate-500 relative group">
        <div
          className="absolute bottom-2 right-2 bg-black opacity-90 text-white 
                       text-xs p-1 rounded-sm  transition duration-800 ease-in-out group-hover:opacity-0"
        >
          {item.time}
        </div>
        <img className="rounded-md hover:rounded-none" src={item.url} alt="" />
      </div>

      <div className="flex flex-row mt-2">
        <div className="p-1">
          <img src={item.icon} className="w-12" alt="" />
        </div>
        <div className="flex flex-1 flex-col p-1">
          <p className="font-sans text-base">{item.title}</p>
          <p className="text-sm text-[#AAAAAA]">{item.channel}</p>
          <div className="text-sm text-[#AAAAAA]">
            <p>
              {item.views} &#8226; <span>{item.age}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItems;
