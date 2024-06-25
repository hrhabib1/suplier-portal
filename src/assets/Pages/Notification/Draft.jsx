const Draft = () => {
    const emails = [
        { from: 'Habibur Rahman', subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!', date: '5/06/2024' },
        { from: 'Hasan', subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!', date: '6/06/2024' },
        { from: 'Saif', subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!', date: '6/06/2024' }
    ];
    return (
        <div className="overflow-x-auto">
             <h1 className="text-black font-bold text-start text-2xl mb-10">Draft</h1>
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">From</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Subject</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-4 py-2 w-40 font-bold text-black">{email.from}</td>
                            <td className="px-4 py-2 text-gray-700">{email.subject}</td>
                            <td className="px-4 py-2 text-gray-700">{email.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Draft;