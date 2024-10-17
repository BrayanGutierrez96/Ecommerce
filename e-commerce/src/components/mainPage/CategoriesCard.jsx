import PropTypes from "prop-types";
function CategoriesCard({img, title}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-2 py-10 border border-gray-300 rounded cursor-pointer hover:bg-red-500">
        <div className=" ">{img}</div>
      <h6 className="text-base">{title}</h6>
    </div>
  );
}

CategoriesCard.propTypes = {
    img: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
}
export default CategoriesCard;
