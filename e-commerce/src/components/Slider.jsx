import PropTypes from "prop-types";

function StatsCard({ icon, value, label, }) {
  
  return (
      <button
        className={`flex flex-col items-center justify-center shadow-lg p-5 rounded-lg focus:bg-red-500`}
      >
        <div className="text-4xl mb-">
          <span className="material-icons">{icon}</span>
        </div>
        <div className="text-4xl font-bold">{value}</div>
        <div className="text-sm mt-2">{label}</div>
      </button>
    );
}

StatsCard.propTypes = {
  icon : PropTypes.string.isRequired,
  value : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
}


function StatsGrid() {
    const stats = [
      { icon: 'store', value: '10.5k', label: 'Sellers active on our site'},
      { icon: 'monetization_on', value: '33k', label: 'Monthly Product Sale' },
      { icon: 'shopping_bag', value: '45.5k', label: 'Customers active in our site' },
      { icon: 'attach_money', value: '25k', label: 'Annual gross sale in our site' },
    ];

    return (
      <div className="w-full px-32 justify-between"> {/* Limita el ancho del contenedor y lo centra */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              highlighted={stat.highlighted}
            />
          ))}
        </div>
      </div>
    );
}

// Envolviendo el componente con un div externo para modular la altura
function StatsPage() {
  return (
    <div className="h-96 flex items-center justify-center"> {/* Controla la altura de toda la sección */}
      <StatsGrid />
    </div>
  );
}


export default StatsPage;

