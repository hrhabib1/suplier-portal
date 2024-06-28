const users = [
    {
      id: 'a2a32793-1c9e-4b8f-ac79-557e90b670cd',
      email: 'abc@gmail.com',
    },
    {
      id: 'cf264b2d-4bdf-46bf-94d1-cf264b2d-4bdf',
      email: 'habib@gmail.com',
    },
    {
      id: '040b09dd-c2c5-48d9-48d9-176a9fc7f17b',
      email: 'hr@gmail.com',
    }
  ];
const Departments = () => {
    return (
        <div>
      <h1 className="text-center text-black font-bold py-2 border mb-5 text-xl">Departments</h1>
      <table className="border w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-start p-2 border">Department ID</th>
            <th className="text-start p-2 border">Department Name</th>
            <th className="text-start p-2 border">Action</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {users.map(user => (
            <tr key={user.id}>
              <td className="p-5 border w-96">{user.id}</td>
              <td className="p-5 border">{user.email}</td>
              <td className="p-5 border w-60">
                <div>
                    <button className="bg-slate-200 p-2 rounded mr-5">Update</button>
                    <button className="bg-slate-200 p-2 rounded">Delate</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Departments;