function Empty({ message }) {
  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center text-[#fff]">
      <div className="flex w-[90%] flex-col gap-[10px] rounded-md bg-[#323232d6] p-[10px] md:w-[450px]">
        {message}
      </div>
    </div>
  );
}

export default Empty;
