const Profile = () => {
    return (
        <div className="grid grid-cols-12 gap-5 pt-16">
            <div className="col-start-1 col-end-7 p-5 border bg-white">
                <p className="text-black"><strong>Name:</strong> Md. Habibur Rahman.</p>
                <p className="text-black"><strong>Email:</strong> sayefhabib123@gmail.com</p>
                <p className="text-black"><strong>User Name:</strong> hr@habib</p>
                <p className="text-black"><strong>Job Title:</strong> Fron-end Developer</p>
            </div>
            <div className="col-start-7 col-end-10 p-5 border text-black font-bold text-xl text-center   bg-white">
                <h1>Site QR Code</h1>

            </div>
            <div className="col-start-10 col-end-13 p-5 border text-center   bg-white">
                <button className="btn btn-dark text-center">Generate QR Code</button>
            </div>
        </div>
    );
};

export default Profile;