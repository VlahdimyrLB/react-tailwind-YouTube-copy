import { Data } from "./data";
import GridItems from "./GridItems";

const Grid = () => {
  return (
    <section className="static">
      <div className="grid grid-cols-1 py-2 px-2 mt-10 gap-3 space-y-1 sm:grid-cols-2 sm:px-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:space-y-0">
        {Data.map((items, index) => (
          <GridItems key={index} item={items} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
