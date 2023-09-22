import PropTypes from "prop-types";

export const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className=" outline-none rounded-xl py-2 px-3 w-full sm:w-2/3 max-w-xs sm:max-w-none mt-4"
      required
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
