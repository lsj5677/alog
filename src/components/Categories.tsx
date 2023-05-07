type Props = {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
};

export default function Categories({
  categories,
  selected,
  setSelected,
}: Props) {
  return (
    <section className="p-4">
      <h4 className="mb-1 border-b border-darkGray pb-2 text-lg font-bold uppercase">
        Categories
      </h4>
      <ul className="uppercase leading-9">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setSelected(category)}
            className={`cursor-pointer transition-all hover:bg-default hover:pl-2 hover:text-white hover:transition-all ${
              category === selected && "bg-point pl-2 text-white"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
