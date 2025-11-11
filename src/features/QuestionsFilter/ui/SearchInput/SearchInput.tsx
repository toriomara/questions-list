import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../../../shared/hooks/useDebounce";
import { setSearch } from "../../../../widgets/questionFilters/model/filterSlice";
import Search from "../../../../shared/assets/images/icons/search.svg";
import { Input } from "../../../../shared/ui";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(debouncedValue.trim()));
  }, [debouncedValue, dispatch]);

  return (
    <div className="relative w-full max-w-md">
      <img
        src={Search}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5 pointer-events-none"
        alt="Search"
      />

      <Input
        name="search"
        type="text"
        placeholder="Enter a query..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-input-padding"
      />
    </div>
  );
};
