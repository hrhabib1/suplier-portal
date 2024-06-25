import {  useNavigate } from 'react-router-dom';
import  '../../Style/Style.css';
const LogIn = () => {
    const navigate = useNavigate();

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (email === 'sayefhabib123@gmail.com' && password === '2345678') {
            navigate('/');
        } else {
            alert('Invalid email or password');
        }
    }
    return (
        <div className="hero bg-slate-50 min-h-screen">
            <div className="hero-content">
                <div className="card bg-base-400 shrink-0 shadow-2xl p-10">
                   <div className="text-center">
                   <h1 className="text-2xl text-black">Supplier Portal</h1>
                   <p className="text-sm">Login to your account</p>
                   </div>
                    <form onSubmit={handleLogIn} className="card-body py-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered bg-white inp text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-white inp text-black" required />
                        </div>
                        <div className="form-control mt-1">
                            <button className="btn btn-light px-2">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;