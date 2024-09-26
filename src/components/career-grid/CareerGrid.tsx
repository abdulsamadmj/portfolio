import CareerGridItem, { CareerGridItemProps } from "./CareerGridItem";

interface CareerGridProps {
  list: CareerGridItemProps[];
}

function CareerGrid({ list }: CareerGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {list.map((item) => (
        <CareerGridItem {...item} />
      ))}
    </div>
  );
}

export default CareerGrid;
