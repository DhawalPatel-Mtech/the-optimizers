import TransactionCard from "@/components/TransactionCard";

export default function Income() {
  return (
    <TransactionCard
      type="income"
      categoryName="Salary"
      categoryDesciption="Your monthly salary"
      amount={50000}
      date="01/01/2021"
    />
  );
}
