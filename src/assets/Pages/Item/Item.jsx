const Item = () => {
    const items = [
        { invoice: 'inv001', status: 'paid', method: 'credit card', amount: '450.00' },
        { invoice: 'inv002', status: 'paid', method: 'credit card', amount: '350.00' },
        { invoice: 'inv003', status: 'unpaid', method: '-', amount: '250.00' },
        { invoice: 'inv004', status: 'unpaid', method: '-', amount: '550.00' },
        { invoice: 'inv005', status: 'paid', method: 'credit card', amount:'650.00' },
        { invoice: 'inv006', status: 'unpaid', method: '-', amount: '450.00' },
        { invoice: 'inv007', status: 'paid', method: 'credit card', amount: '750.00' },

    ];
    const totalAmount =  items.reduce((sum, invoice) =>sum + Number(invoice.amount), 0);
    return (
        <div className="overflow-x-auto">
            <h1 className="text-black font-bold text-center text-2xl mb-10">Invoice list</h1>
            <table className="min-w-full border">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Invoice</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Status</th>
                        <th className="px-4 py-2 font-medium text-gray-700 border text-center">Method</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 w-40 font-bold text-black border">{item.invoice}</td>
                            <td className="px-4 py-2 text-gray-700 border">{item.status}</td>
                            <td className="px-4 py-2 text-gray-700 w-full text-center border">{item.method}</td>
                            <td className="px-4 py-2 text-gray-700 border">${item.amount}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="text-black bg-gray-300">
                        <td className="px-4 py-2" colSpan="3">Total</td>
                        <td className="px-4 py-2">${totalAmount}</td>
                    </tr>
                </tfoot>
            </table>
            <p className="text-center pt-5">A list of your recent invoices.</p>
        </div>
    );
};

export default Item;