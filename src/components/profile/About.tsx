import { Abouts } from "@/types";
import Title from "../Title";
import { DateIcon, EnvelopeIcon, GlobeIcon, MapMarkerIcon, PhoneIcon, UserIcon } from "../icons";

export default function About() {
  return (
    <div className="w-11/12 sm:w-2/3 mx-auto">
      <Title>
        About <b className="font-semibold">me</b>
      </Title>
      <ul className="my-8 space-y-1">
        {abouts.map((el, index) => (
          <li
            key={index}
            className="flex justify-between text-purple-900 text-sm xs:text-base"
          >
            <div className="flex items-center space-x-3">
              <i className="h-4 w-4">{el.icon}</i>
              <h6 className="font-bold">{el.text}</h6>
            </div>
            <p>{el.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const defaultValue = {
  name: "Alfirman Ejha Pahlepi",
  date: "june 11th 1999",
  number: "+62 896-7375-7429",
  email: "alfirman.180170083 @mhs.unimal.ac.id",
  web: "https://portfolio-alfirman.web.app/",
  address: "Aceh Tamiang, Aceh, Indonesia",
};

const abouts: Abouts = [
  {
    text: "Name",
    value: defaultValue.name,
    icon: <UserIcon />,
  },
  {
    text: "Date of Birth",
    value: defaultValue.date,
    icon: <DateIcon />,
  },
  {
    text: "Phone",
    value: defaultValue.number,
    icon: <PhoneIcon />,
  },
  {
    text: "E-mail",
    value: defaultValue.email,
    icon: <EnvelopeIcon />,
  },
  {
    text: "Web",
    value: defaultValue.web,
    icon: <GlobeIcon />,
  },
  {
    text: "Address",
    value: defaultValue.address,
    icon: <MapMarkerIcon />,
  },
];