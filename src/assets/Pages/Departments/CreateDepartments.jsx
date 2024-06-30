const CreateDepartments = () => {
    const handleAddDepartment = event => {
        event.preventDefault();
        const form = event.target;
        const deptId = form.deptId.value;
        const deptName = form.deptName.value;
        
        const addDepartmentPost = {
            departments_id:deptId,
            departments_name:deptName,
        }
        console.log(addDepartmentPost)
        fetch('http://localhost:3000/departments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addDepartmentPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        form.reset();
    }

    return (
        <div className="hero bg-slate-50 ">
        <div className="hero-content">
            <div className="card bg-base-400 shrink-0 shadow-2xl p-10">
               <div className="text-center">
               <h1 className="text-2xl text-black">Create Department</h1>
               </div>
                <form onSubmit={handleAddDepartment} className="card-body py-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Department Id</span>
                        </label>
                        <input type="text" name='deptId' placeholder="Enter Department Id" className="input input-bordered bg-white inp text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Department Name</span>
                        </label>
                        <input type="text" name='deptName' placeholder="Enter Department Name" className="input input-bordered bg-white inp text-black" required />
                    </div>
                    <div className="form-control mt-5 w-48 mx-auto">
                        <button type="submit" className="btn btn-light px-2">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default CreateDepartments;