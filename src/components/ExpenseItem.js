import './ExpenseItem.css'
function ExpenseItem() {
    const enxpenseDate = new Date(2022, 1, 9);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    return (
        <div className='expense-item'>
            <div>{enxpenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;