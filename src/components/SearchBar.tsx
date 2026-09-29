interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="field field-search">
      <label htmlFor="search">Find something delicious</label>
      <input
        id="search"
        type="search"
        placeholder="Dish, ingredient, region..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
