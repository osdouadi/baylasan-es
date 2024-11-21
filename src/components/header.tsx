import React from "react";
import Logo from "./logo";
import ContactItemContainer from "./contact-item-container";
import { Mail, Phone } from "lucide-react";

const contactItems = [
  { text: "alshabli.com.sa", icon: Mail },
  { text: "+9665805949", icon: Phone },
];

const Header = () => {
  return (
    <header className="flex justify-center pb-4">
      <Logo />
    </header>
  );
};

export default Header;
