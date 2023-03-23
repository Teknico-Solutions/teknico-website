import webDevelopment from "../public/svg/web_development.svg";
import softwareDevelopment from "../public/svg/software_development.svg";
import cloudComputing from "../public/svg/cloud_computing.svg";
import automationDevelopment from "../public/svg/automation_development.svg";
import dataAnalytics from "../public/svg/data_analytics.svg";
import eCommerce from "../public/svg/e-commerce.svg";

export interface ServiceProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export const Services: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "Build user-friendly and visually appealing websites and web applications that improve online presence and customer engagement.",
    image: {
      src: webDevelopment,
      alt: "web development",
    },
  },
  {
    title: "Software Development",
    description:
      "Create reliable and scalable software solutions with user-friendly interfaces that enhance business processes, performance, and security.",
    image: {
      src: softwareDevelopment,
      alt: "software development",
    },
  },
  {
    title: "Data Analytics",
    description:
      "Provide data-driven insights and solutions by analyzing large datasets to identify trends and patterns that enable organizations to make informed decisions and optimize performance.",
    image: {
      src: dataAnalytics,
      alt: "data analytics",
    },
  },
  {
    title: "Cloud Computing",
    description:
      "Host websites and applications in a secure and scalable environment with easy access to cloud resources, enabling efficient collaboration and data sharing.",
    image: {
      src: cloudComputing,
      alt: "cloud computing",
    },
  },
  {
    title: "E-commerce Development",
    description:
      "Build customized and optimized e-commerce solutions with seamless checkout experiences, secure payment gateways, and customer management systems to improve online sales and customer engagement.",
    image: {
      src: eCommerce,
      alt: "e-commerce development",
    },
  },
  {
    title: "Automation Development",
    description:
      "Automate repetitive and manual tasks with customized software solutions that enhance efficiency and accuracy, reduce costs and errors, and empower employees to focus on high-value tasks.",
    image: {
      src: automationDevelopment,
      alt: "automation development",
    },
  },
];
