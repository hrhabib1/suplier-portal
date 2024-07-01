import { useLoaderData } from "react-router-dom";

const UpdateDepartment = () => {
   const service = useLoaderData()
   const {departments_id} = service;
   console.log(departments_id)
    const handleUpdateDepartment = event => {
        event.preventDefault();
        const form = event.target;
        const id = form.deptId.value;
        const deptName = form.deptName.value;

        const updateDepartmentPost = {
            departments_name:deptName,
        }
        fetch(`http://localhost:3000/departments/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDepartmentPost)
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
                <form onSubmit={handleUpdateDepartment} className="card-body py-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Department Id</span>
                        </label>
                        <input type="text" name='deptId' placeholder="Enter Department ID" className="input input-bordered bg-white inp text-black" required />
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

export default UpdateDepartment;