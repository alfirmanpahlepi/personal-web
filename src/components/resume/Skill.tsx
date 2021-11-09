import Tech from "../Tech";
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
            <div key={i} className="h-[50px] w-[50px] m-2 relative">
              <Tech tech={fav} />
            </div>
          ))}
        </div>
        <p className="font-medium text-lg mt-10 text-purple-900">
          I'm familiar with this tech and tools
        </p>
        <div className="flex flex-wrap mt-4 w-full justify-center">
          {familiars.map((fam, i) => (
            <div key={i} className="h-[35px] w-[35px] relative m-2 opacity-60">
              <Tech tech={fam} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
