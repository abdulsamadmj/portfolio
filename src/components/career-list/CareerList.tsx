import CareerListItem, { CareerListItemProps } from "./CareerListItem";

interface CareerListProps {
  list: CareerListItemProps[];
}

const CareerList = ({ list }: CareerListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {list.map((job, index) => (
        <CareerListItem
          key={index}
          company={job.company}
          date={job.date}
          position={job.position}
          link={job.link}
        />
      ))}
    </div>
  );
};

export default CareerList;
