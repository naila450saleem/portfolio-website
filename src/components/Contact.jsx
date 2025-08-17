import React from "react";
import CustomeText from "./ui/CustomeText";
import { Mail, MapPin, Phone } from "lucide-react";

// ✅ Import images from src/assets
import smsIcon from "../assets/sms.svg";

const iconAndText = [
  { icon: Mail, name: "nailasaleem450@gmail.com" },
  { icon: Phone, name: "+92 347 6354569" },
  { icon: MapPin, name: "Multan, Pakistan" },
];

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-center">
      {/* Headings */}
      <div className="mb-8">
        <CustomeText
          title="Have an Awesome Project"
          className="text-2xl md:text-3xl font-bold"
        />
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          <CustomeText
            title="Idea?"
            className="text-2xl md:text-3xl font-bold"
          />
          <CustomeText
            title="Let's Discuss"
            className="text-2xl md:text-3xl font-bold text-blue-600"
          />
        </div>
      </div>

      {/* Input Box */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <div className="bg-blue-100 p-2 rounded-full">
          <img src={smsIcon} alt="message icon" className="w-6 h-6" />
        </div>
        <input
          type="text"
          placeholder="Enter Email Address"
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Send
        </button>
      </div>

      {/* Icon and Text List */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        {iconAndText.map((data, index) => {
          const Icon = data.icon;
          return (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <Icon size={20} />
              <span>{data.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
