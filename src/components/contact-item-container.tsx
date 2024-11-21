import { LucideProps } from "lucide-react";
import React from "react";

type ContactItemContainerProps = {
  contactText: string;
  contactIcon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >; // Correct type for the icon component
};

const ContactItemContainer: React.FC<ContactItemContainerProps> = ({
  contactText,
  contactIcon: Icon,
}) => {
  return (
    <div className="flex items-center gap-1 text-xs font-semibold text-purple-900 tracking-wider">
      <Icon className="w-4 h-4"/> 
      {contactText}
    </div>
  );
};

export default ContactItemContainer;
