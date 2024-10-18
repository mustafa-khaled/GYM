const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-slate-500 p-[10px] text-left text-sm rtl:text-right">
        {children}
      </table>
    </div>
  );
};

const Header = ({ children }) => {
  return (
    <thead className="bg-[#000] text-xs uppercase">
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
    <Tag
      scope={isHeader ? "col" : "row"}
      className="border-l border-slate-500 px-6 py-4"
    >
      {children}
    </Tag>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
