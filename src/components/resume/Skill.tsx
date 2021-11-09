import Title from "../Title";

export default function Skill() {
  return (
    <>
      <Title>
        my <b className="font-semibold">skills</b>
      </Title>
      <div className="w-11/12 mx-auto">
        <p className="font-medium text-lg">My favourite tech stack</p>
        <div className="grid grid-cols-7 gap-2">
            <div className="bg-pink-600 h-[80px]"></div>
            <div className="bg-pink-600 h-[80px]"></div>
            <div className="bg-pink-600 h-[80px]"></div>
        </div>
      </div>
    </>
  );
}
