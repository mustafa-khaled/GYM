function Container({ children }) {
  return (
    <div className="mx-auto w-full px-[20px] md:px-[10px] lg:w-[90%] xl:w-[85%]">
      {children}
    </div>
  );
}

export default Container;
