import Github from "./Github";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Whatsapp from "./Whatsapp";
import Quest from "./Quest";
import User from "./User";
import Date from "./Date";
import Phone from "./Phone";
import Globe from "./Globe";
import MapMarker from "./MapMarker";
import Envelope from "./Envelope";
import Graduation from "./Graduation";
import Ball from "./Ball";
import Gamepad from "./Gamepad";
import Camera from "./Camera";
import Guitar from "./Guitar";
import Dollar from "./Dollar";
import Code from "./Code";
import LightBulb from "./LightBulb";
import Diamond from "./Diamond";
import MapMarkerAlt from "./MapMarkerAlt";
import EnvelopeAlt from "./EnvelopeAlt";
import PhoneAlt from "./PhoneAlt";
import Home from "./Home";
import Document from "./Document";
import Coper from "./Coper";
import Arrow from "./Arrow";

interface IconProps {
  name: string;
}

export default function Icon({ name }: IconProps): JSX.Element {
  switch (name) {
    case "Arrow":
      return <Arrow />;
    case "Ball":
      return <Ball />;
    case "Camera":
      return <Camera />;
    case "Code":
      return <Code />;
    case "Coper":
      return <Coper />;
    case "Date":
      return <Date />;
    case "Diamond":
      return <Diamond />;
    case "Document":
      return <Document />;
    case "Dollar":
      return <Dollar />;
    case "Envelope":
      return <Envelope />;
    case "EnvelopeAlt":
      return <EnvelopeAlt />;
    case "Gamepad":
      return <Gamepad />;
    case "Github":
      return <Github />;
    case "Globe":
      return <Globe />;
    case "Graduation":
      return <Graduation />;
    case "Guitar":
      return <Guitar />;
    case "Home":
      return <Home />;
    case "Instagram":
      return <Instagram />;
    case "LightBulb":
      return <LightBulb />;
    case "LinkedIn":
      return <LinkedIn />;
    case "MapMarker":
      return <MapMarker />;
    case "MapMarkerAlt":
      return <MapMarkerAlt />;
    case "Phone":
      return <Phone />;
    case "PhoneAlt":
      return <PhoneAlt />;
    case "Quest":
      return <Quest />;
    case "User":
      return <User />;
    case "Whatsapp":
      return <Whatsapp />;
    default:
      return <Quest />;
  }
}

export {
  Github as GithubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Whatsapp as WhatsappIcon,
  Quest as QuestIcon,
  User as UserIcon,
  Date as DateIcon,
  Phone as PhoneIcon,
  Globe as GlobeIcon,
  MapMarker as MapMarkerIcon,
  Envelope as EnvelopeIcon,
  Graduation as GraduationIcon,
  Camera as CameraIcon,
  Gamepad as GamepadIcon,
  Ball as BallIcon,
  Arrow as ArrowIcon,
  Coper as CoperIcon,
  Document as DocumentIcon,
  Home as HomeIcon,
  PhoneAlt as PhoneAltIcon,
  EnvelopeAlt as EnvelopeAltIcon,
  MapMarkerAlt as MapMarkerAltIcon,
  Diamond as DiamondIcon,
  LightBulb as LightBulbIcon,
  Code as CodeIcon,
  Dollar as DollarIcon,
  Guitar as GuitarIcon,
};
