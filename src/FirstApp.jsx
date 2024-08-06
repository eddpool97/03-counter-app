import PropTypes from 'prop-types';

export const FirstApp = ({ title, message }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
      <p>{name}</p>
    </>
  );
};

//Manejo de PropTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

//Manejo de DefaultProps
FirstApp.defaultProps = {
  title: 'No Value',
  message: 'No Value',
  name: 'Edwin Ayala'
};
