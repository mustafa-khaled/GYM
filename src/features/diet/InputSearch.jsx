import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "../../utils/helpers";
import { FaSearch } from "react-icons/fa";
import Container from "../../ui/Container";

export default function InputSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(search);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value.length >= 3 || value === "") {
        searchParams.set("search", value);
        setSearchParams(searchParams);
      }
    }, 300),
    [],
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  }

  return (
    <div className="border-b border-slate-500 bg-bg_color py-3">
      <Container>
        <div className="relative">
          <input
            placeholder="بـحـث"
            className="mb-[10px] h-16 w-full rounded-full bg-[#000] pl-[10px] pr-[50px] text-[#ffffffff] outline-none"
            value={searchValue}
            onChange={handleChange}
          />
          <div className="absolute right-[22px] top-[45%] translate-y-[-50%]">
            <FaSearch className="text-[#ffffffff]" />
          </div>
        </div>
      </Container>
    </div>
  );
}
