import Spinner from "../_components/Spinner";

const Loading: React.FC = () => {
  return (
    <div className="grid items-cent justify-center">
      <Spinner />
      <p className="text-primary-200">Loading Cabins Data ....</p>
    </div>
  );
};

export default Loading;
