const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto rounded-t-md">
      <table className="border-secondary w-full rounded-t-md p-[10px] text-left text-sm rtl:text-right">
        {children}
      </table>
    </div>
  );
};

const Header = ({ children }) => {
  return (
    <thead className="rounded-t-md bg-[#000] text-xs uppercase">
      <tr className="text-center">{children}</tr>
    </thead>
  );
};

const Body = ({ data, render }) => {
  return <tbody>{data?.map(render)}</tbody>;
};

const Row = ({ children }) => {
  return (
    <tr className="border-b border-slate-500 bg-bg_color text-center">
      {children}
    </tr>
  );
};

const Cell = ({ children, isHeader = false }) => {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag scope={isHeader ? "col" : "row"} className="px-6 py-4">
      {children}
    </Tag>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
