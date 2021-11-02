import { ReactNode } from "react";

interface TitleProps { children: ReactNode }

export default function Title({ children }: TitleProps) {
  return (
    <div className="flex justify-center py-6">
      <h3 className="text-lg text-purple-900 border-b-2 border-pink-600 py-2 uppercase text-center inline-block">
        {children}
      </h3>
    </div>
  );
};
