const CardHeader = ({ children }) => (
  <div className="flex justify-between items-center">
    <h1 className="mb-3 font-semibold text-gray-900 dark:text-white text-3xl">
      {children}
    </h1>
  </div>
);

export { CardHeader };