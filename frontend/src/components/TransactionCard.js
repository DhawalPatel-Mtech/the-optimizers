import { TRANSACTION_TYPE } from "@/constants/transactionType";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const TransactionCard = ({
  icon,
  type,
  categoryName,
  categoryDesciption,
  amount,
  date,
}) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg my-2 w-full mx-4">
      {/* Left Icon */}
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
        {icon}
      </div>

      {/* Title and Description */}
      <div className="flex flex-col flex-grow px-4">
        <h3 className="text-2xl font-semibold">{categoryName}</h3>
        <p className="text-lg text-gray-500">
          {" "}
          <strong
            className={
              type == TRANSACTION_TYPE.INCOME
                ? "text-green-500"
                : "text-red-500"
            }
          >
            ₹ {amount}
          </strong>{" "}
          | {date}
        </p>
        <p className="text-lg text-gray-500">{categoryDesciption}</p>
      </div>

      {/* Right Icon */}
      <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center">
        {type == TRANSACTION_TYPE.INCOME ? (
          <FaArrowUp className="text-green-500" />
        ) : (
          <FaArrowDown className="text-red-500" />
        )}
      </button>
    </div>
  );
};

export default TransactionCard;
