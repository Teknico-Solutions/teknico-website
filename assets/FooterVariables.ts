export interface FooterProps {
  title: string;
  list: {
    name: string;
    href: string;
  }[];
}

export const Services: FooterProps = {
  title: "services",
  list: [
    {
      name: "Web Development",
      href: "",
    },
    {
      name: "Software Development",
      href: "",
    },
    {
      name: "Data Analytics",
      href: "",
    },
    {
      name: "Cloud Computing",
      href: "",
    },
    {
      name: "E-commerce Development",
      href: "",
    },
    {
      name: "Automation Development",
      href: "",
    },
  ],
};

export const About: FooterProps = {
  title: "about",
  list: [
    {
      name: "Company",
      href: "",
    },
    {
      name: "Services",
      href: "",
    },
    {
      name: "Team",
      href: "",
    },
  ],
};
