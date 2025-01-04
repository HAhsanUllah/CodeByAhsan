import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
      <div className="space-y-6">
        <InfoItem
          icon={<Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />}
          title="Email"
          content="ahsanullahfarooqi73@gmail.com"
        />
        <InfoItem
          icon={<Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />}
          title="Phone"
          content="+92 332 4678353"
        />
        <InfoItem
          icon={<MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />}
          title="Location"
          content="Islamabad Pakistan"
        />
      </div>
    </div>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, content }) => (
  <div className="flex items-start">
    {icon}
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </div>
);

export default ContactInfo;