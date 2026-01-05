const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6 mt-20">
      <div className="text-center">
        <p>
          © {new Date().getFullYear()} MD Soriful Islam  
        </p>
        <p className="text-sm mt-1">
          Frontend Developer | React Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
