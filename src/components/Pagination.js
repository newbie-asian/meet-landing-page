const Pagination = (props) => {
  const customClass = props.sample;

  return (
    <div
      className={
        customClass +
        " page relative flex justify-center items-center bg-white before:content-[''] before:h-20 before:opacity-30 before:w-[1px] before:absolute before:left-[50%] before:right-[50%] before:top=[-6em] before:mt-[-8.5rem]  before:bg-gray w-14 h-14 mx-auto border-[1px] border-gray rounded-full border-opacity-30 mt-32  md:mb-16 mb-10"
      }
    >
      <span className="block font-bold font-redBlack text-gray page__num">{props.pageNum}</span>
    </div>
  );
};

export default Pagination;
