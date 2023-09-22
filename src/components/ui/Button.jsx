import PropTypes from "prop-types";

export const Button = ({ children, onClick }) => {
  return (
    <button
      className="rounded-xl py-3 px-6 w-full sm:w-1/3 bg-gradient-to-r from-gray-500 to-blue-700 text-white hover:from-blue-700 hover:to-violet-900 transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 max-w-xs sm:max-w-none mt-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

