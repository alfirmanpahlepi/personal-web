import Image from "next/image";
import Title from "../Title";

interface SkillProps {
  favourites: string[];
  familiars: string[];
}

export default function Skill({ favourites, familiars }: SkillProps) {
  return (
    <>
      <Title>
        my <b className="font-semibold">skills</b>
      </Title>
      <div className="w-11/12 mx-auto">
        <p className="font-medium text-lg text-purple-900">
          My favourite tech stack
        </p>
        <div className="flex flex-wrap mt-4">
          {favourites.map((fav, i) => (
            <div
              key={i}
              className="w-[40px] h-[40px] xs:h-[50px] xs:w-[50px] m-2 relative"
            >
              <Image
                objectFit="contain"
                layout="fill"
                alt={fav}
                src={`/tech/${fav}.png`}
              />
            </div>
          ))}
        </div>
        <p className="font-medium text-lg mt-10 text-purple-900">
          I'm familiar with this tech and tools
        </p>
        <div className="flex flex-wrap mt-4 w-full justify-center">
          {familiars.map((fam, i) => (
            <div key={i} className="h-[35px] w-[35px] relative m-2 saturate-50 opacity-50 hover:saturate-200 hover:opacity-100 duration-200">
              <Image
                objectFit="contain"
                layout="fill"
                alt={fam}
                src={`/tech/${fam}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
