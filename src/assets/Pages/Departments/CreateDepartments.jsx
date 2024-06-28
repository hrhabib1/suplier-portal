const CreateDepartments = () => {
    return (
        <div className="hero bg-slate-50 ">
        <div className="hero-content">
            <div className="card bg-base-400 shrink-0 shadow-2xl p-10">
               <div className="text-center">
               <h1 className="text-2xl text-black">Create Department</h1>
               </div>
                <form className="card-body py-0">
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
                        <button className="btn btn-light px-2">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default CreateDepartments;