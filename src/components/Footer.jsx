const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      Copyright &copy; {year}, Pathivara Gas Udyog, Birtamode Jhapa. All rights
      reserved.
    </div>
  );
};
export default Footer;
