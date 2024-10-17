import Arrows from "./Arrows";
import CategoriesCard from "./CategoriesCard";
import HeadSection from "./HeadSection";
import TitleSections from "./TitleSections";
import  {PhoneIphone, DesktopWindows, Watch, PhotoCamera, Headphones, VideogameAsset} from "@mui/icons-material"

function CategoriesProducts() {
  return (
    <section className="flex flex-col gap-8 border-b-2 pb-20">
      <HeadSection title={"Categories"} />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-2">
        <TitleSections desc={"Browse By Category"} />
        <Arrows />
      </div>
      <article className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-10 md:grid-cols-4 xl:grid-cols-6 mt-12">
        <CategoriesCard img={<PhoneIphone style={{ fontSize: "2rem" }}/>} title="Phones" />
        
        <CategoriesCard img={<DesktopWindows style={{fontSize: "2rem" }} />} title="Computers" />
        <CategoriesCard img={<Watch style={{ fontSize: "2rem" }}/>} title="SmartWatch" />
        <CategoriesCard img={<PhotoCamera style={{ fontSize: "2rem" }}/>} title="Camera" />
        <CategoriesCard img={<Headphones style={{ fontSize: "2rem" }}/>} title="Headphones" />
        <CategoriesCard img={<VideogameAsset style={{ fontSize: "2rem" }}/>} title="Gaming" />
      </article>
    </section>
  );
}

export default CategoriesProducts;
