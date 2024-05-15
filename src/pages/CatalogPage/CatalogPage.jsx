import CarList from "../../components/CarList/CarList";
import FilterForm from "../../components/FilterForm/FilterForm";

const CatalogPage = () => {
  return (
    <>
      <FilterForm />
      <CarList />;
    </>
  );
};

export default CatalogPage;
