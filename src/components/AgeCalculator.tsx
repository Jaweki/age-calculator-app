import AgeDisplay from "./AgeDisplay";
import InputForm from "./InputForm";

const AgeCalculator = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-neutral-offWhite relative">
      <div className="w-[47%] h-[67%] max-mobile:w-[90%]  bg-neutral-white rounded-3xl rounded-br-[30%] flex flex-col justify-center pt-10 max-mobile:pt-5 pl-20 max-mobile:pl-2">
        <InputForm />
        <AgeDisplay />
      </div>

      <p className="max-mobile:text-[12px] mt-6">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          className="text-blue-600 underline"
        >
          Frontend Mentor.{" "}
        </a>
        Coded by{" "}
        <a href="portfolio.jaweki.com" className="text-blue-600 underline">
          Jaweki.
        </a>
      </p>
    </div>
  );
};

export default AgeCalculator;
