import data from "@/data/socialMedia.json";
import Icon from "./icons";

export default function HeroImage() {
  return (
    <div
      className="h-full w-full bg-cover flex items-end relative"
      style={{ backgroundImage: "url(/hero-img.jpg)" }}
    >
      <ul className="w-full flex justify-evenly mb-3">
        {data.map((social) => (
          <li
            key={social.color}
            className="group h-12 w-12 relative bg-white border-2 border-white rounded-full overflow-hidden"
          >
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="h-full w-full grid place-items-center z-20 absolute text-gray-800 group-hover:text-white duration-500"
            >
              <i className="h-6 w-6">
                <Icon name={social.icon} />.
              </i>
            </a>
            <div
              style={{ background: social.color }}
              className="absolute h-full w-full left-0 top-0 translate-y-14 group-hover:translate-y-0 duration-500 z-10"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
