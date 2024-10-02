const CardFooter = ({ onContinue }) => (
  <div className="flex justify-center items-center mt-4">
    <button className="bg-[#004aad] text-white px-4 py-2 rounded-md" onClick={onContinue}>
      Continuar
    </button>
  </div>
);

export { CardFooter };