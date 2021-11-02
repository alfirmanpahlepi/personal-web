import { SocialMedias } from '@/types';
import Github from './icons/Github';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import Whatsapp from './icons/Whatsapp';

export default function HeroImage() {
  return (
    <div
      className="h-full w-full bg-cover flex items-end"
      style={{ backgroundImage: 'url(/hero-img.jpg)' }}
    >
      <ul className="w-full flex justify-evenly mb-3">
        {
          socialMedias.map((social) => (
            <li key={social.color} className="group h-12 w-12 relative bg-white border-2 border-white rounded-full overflow-hidden">
              <a href="#" className="h-full w-full grid place-items-center z-20 absolute text-gray-800 group-hover:text-white duration-500">
                {social.icon}
              </a>
              <div
                style={{ background: social.color }}
                className="absolute h-full w-full left-0 top-0 translate-y-14 group-hover:translate-y-0 duration-500 z-10"
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const socialMedias: SocialMedias = [
  {
    icon: <Whatsapp />,
    link: '#',
    color: '#219c21',
  },
  {
    icon: <Instagram />,
    link: '#',
    color: 'radial-gradient(circle farthest-corner at 35% 90%,#fec564,transparent 50%),radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),radial-gradient(ellipse farthest-corner at 20% -50%,#5258cf,transparent 50%),radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),radial-gradient(ellipse farthest-corner at 60% -20%,#893dc2,transparent 50%),radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),linear-gradient(#6559ca,#bc318f 30%,#e33f5f 50%,#f77638 70%,#fec66d 100%)',
  },
  {
    icon: <Github />,
    link: '#',
    color: '#161B22',
  },
  {
    icon: <LinkedIn />,
    link: '#',
    color: '#0077b5',
  },
];
