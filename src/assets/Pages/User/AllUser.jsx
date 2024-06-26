const users = [
    {
      id: 'a2a32793-1c9e-4b8f-ac79-557e90b670cd',
      email: 'abc@gmail.com',
      userId: 31,
      userName: 'abc@gmail.com',
      firstName: 'abc',
      middleName: '',
      lastName: 'abc',
      jobTitle: 'front-end',
      organizationType: 'Supplier',
      organizationId: 100001,
      organizationIdColumnName: 'vendor_id'
    },
    {
      id: 'cf264b2d-4bdf-46bf-94d1-cf264b2d-4bdf',
      email: 'habib@gmail.com',
      userId: 27,
      userName: 'habib',
      firstName: 'habibur',
      middleName: '',
      lastName: 'rahman',
      jobTitle: 'Software Engineer',
      organizationType: 'Supplier',
      organizationId: 100002,
      organizationIdColumnName: 'vendor_id'
    },
    {
      id: '040b09dd-c2c5-48d9-48d9-176a9fc7f17b',
      email: 'hr@gmail.com',
      userId: 20,
      userName: 'hr',
      firstName: 'h',
      middleName: '',
      lastName: 'r',
      jobTitle: 'Web Developer',
      organizationType: 'Supplier',
      organizationId: 100003,
      organizationIdColumnName: 'vendor_id'
    }
  ];
const AllUser = () => {
    return (
        <div>
      <h1 className="text-center text-black font-bold py-2 border mb-5 text-xl">User List</h1>
      <table className="border">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-start p-2 border">ID</th>
            <th className="text-start p-2 border">Email</th>
            <th className="text-start p-2 border">User ID</th>
            <th className="text-start p-2 border">User Name</th>
            <th className="text-start p-2 border">First Name</th>
            <th className="text-start p-2 border">Middle Name</th>
            <th className="text-start p-2 border">Last Name</th>
            <th className="text-start p-2 border">Job Title</th>
            <th className="text-start p-2 border">Organization Type</th>
            <th className="text-start p-2 border">Organization ID</th>
            <th className="text-start p-2 border">Organization ID Column Name</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {users.map(user => (
            <tr key={user.id}>
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.userId}</td>
              <td className="p-2 border">{user.userName}</td>
              <td className="p-2 border">{user.firstName}</td>
              <td className="p-2 border">{user.middleName}</td>
              <td className="p-2 border">{user.lastName}</td>
              <td className="p-2 border">{user.jobTitle}</td>
              <td className="p-2 border">{user.organizationType}</td>
              <td className="p-2 border">{user.organizationId}</td>
              <td className="p-2 border">{user.organizationIdColumnName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;