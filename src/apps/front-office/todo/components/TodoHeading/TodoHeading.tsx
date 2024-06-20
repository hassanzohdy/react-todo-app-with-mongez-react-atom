import CompletedTasks from "./CompletedTasks";
import TotalTasks from "./TotalTasks";

export default function TodoHeading() {
  return (
    <>
      <div className="border border-borderColor rounded-[35px] text-textColor flex items-center justify-around py-10 px-5">
        <div>
          <h1 className="font-semibold md:font-bold text-xl md:text-4xl">
            Todo Done
          </h1>
          <p className="font-extralight text-base md:text-2xl tracking-[.25em]">
            Keep it up
          </p>
        </div>
        <div className="bg-primary text-darkColor text-2xl md:text-5xl font-semibold md:font-bold w-20 h-20 md:w-40 md:h-40 text-center rounded-full flex items-center justify-center">
          <CompletedTasks />/<TotalTasks />
        </div>
      </div>
    </>
  );
}
