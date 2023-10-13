const AgeDisplay = () => {
  return (
    <section className=" w-full flex flex-col font-800i italic text-[60px] max-mobile:text-[40px] max-mobile:pl-[15px] max-mobile:mt-2">
      <p>
        <span id="ageYears" className=" text-primary-purple">
          - -{" "}
        </span>
        years
      </p>
      <p>
        <span id="ageMonths" className=" text-primary-purple">
          - -{" "}
        </span>
        months
      </p>
      <p>
        <span id="ageDays" className=" text-primary-purple">
          - -{" "}
        </span>
        days
      </p>
    </section>
  );
};

export default AgeDisplay;
