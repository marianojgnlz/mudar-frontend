const CategoryItem = ({ name, onClick, isSelected }) => (
    <li>
        <a 
            href="#" 
            className={`
                flex items-center p-3 text-base font-bold text-gray-900 rounded-lg 
                ${isSelected ? 'bg-gray-100 dark:bg-gray-400' : 'bg-gray-50 dark:bg-gray-600'} 
                group
                 dark:text-white`} 
            onClick={onClick}
        >
            <span className="flex-1 ms-3 whitespace-nowrap">
                {name}
            </span>
        </a>
    </li>
);
export default CategoryItem;