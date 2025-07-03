const InfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <h2 className="text-xl capitalize">{title}</h2>
      <p className="h-24">{description}</p>
    </>
  );
};

export default InfoCard;
