export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className="w-[65px] aspect-square relative 
      before:content-[''] before:absolute before:rounded-[50px] before:shadow-[0_0_0_3px_inset_#6a0bff] before:animate-[l4_2.5s_infinite]
      after:content-[''] after:absolute after:rounded-[50px] after:shadow-[0_0_0_3px_inset_#6a0bff] after:animate-[l4_2.5s_infinite] after:animation-delay-[-1.25s]"
      />
    </div>
  );
};
