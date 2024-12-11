import useGeneralInfo from "../hooks/useGeneralInfo";

export const Footer = () => {
    const { generalInfo, loading, error } = useGeneralInfo("A8ZgN0HqwSPofv5qL1JN"); 

  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        ETCH STUDIO
      </a>
      <a
        href="mailto:atelier.etch@gmail.com"
        className="text-sm md:text-md hover:text-indigo-500"
      >
        {generalInfo?.email}
      </a>
      <p className="text-xs mt-2 text-gray-500">
        © Colin Champdavoine 2021. All rights reserved.
      </p>
    </div>
  );
};
