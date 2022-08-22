import { useContext } from 'react';
import { BudgetTrackerContext } from './Componenents/Context/Context';

import { incomeCategories, expenseCategories, resetCategories } from './Componenents/Constant/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(BudgetTrackerContext);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {

    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
     labels:filteredCategories.map((c) => c.amount),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;