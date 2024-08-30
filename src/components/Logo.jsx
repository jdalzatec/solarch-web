const Logo = ({ width = 200 }) => {
  return (
    <img
      src="/src/assets/logo.png"
      alt="Solarch logo"
      style={{
        width: `${width}px`,
      }}
    />
  );
};

export default Logo;
