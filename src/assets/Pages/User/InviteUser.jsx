const InviteUser = () => {
    return (
        <div className="hero bg-slate-50 min-h-screen addUser -mt-16">
        <div className="hero-content">
            <div className="card bg-base-400 shrink-0 shadow-2xl p-10 ">
               <div className="text-center">
               <h1 className="text-2xl text-black">Invite User</h1>
               </div>
                <form className="card-body py-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-semibold">First Name</span>
                        </label>
                        <input type="text" name='fname' placeholder="First Name" className="input input-bordered bg-white inp text-black" required />
                        <small>Error message if any</small>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Middle Name</span>
                        </label>
                        <input type="text" name='mname' placeholder="Middle Name" className="input input-bordered bg-white inp text-black" required />
                        <small>Error message if any</small>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Last Name</span>
                        </label>
                        <input type="text" name='lname' placeholder="Last Name" className="input input-bordered bg-white inp text-black" required />
                        <small>Error message if any</small>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered bg-white inp text-black" required />
                        <small>Error message if any</small>
                    </div>
                    <div className="form-control mt-1">
                        <button className="btn btn-light px-2">Invite</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default InviteUser;