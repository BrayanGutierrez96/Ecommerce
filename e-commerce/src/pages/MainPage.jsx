import Catalog from "../components/Catalog";
import Categories from "../components/Categories";

function MainPage() {
  return (
    <main className="mx-1 sm:mx-32">
      <Categories />
      <Catalog />
     
    </main>
  );
}

export default MainPage;
