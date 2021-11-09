import Image from "next/image";

interface TechProps {
  tech: string;
}

export default function Tech({ tech }: TechProps) {
  return (
    <Image objectFit="contain" layout="fill" alt={tech} src={`/tech/${tech}.png`} />
  );
}
