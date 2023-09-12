function SignupPage() {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                    <input type="text" className="px-4 py-2 rounded-lg border" placeholder="Username"></input>
                </div>
                <div className="mb-4">
                    <input type="email" className="px-4 py-2 rounded-lg border" placeholder="Username"></input>
                </div>
                <div className="mb-4">
                    <input type="password" className="px-4 py-2 rounded-lg border" placeholder="Password"></input>
                </div>
                <div className="mb-4">
                    <input type="password" className="px-4 py-2 rounded-lg border" placeholder="Confirm Password"></input>
                </div>
                <div className="mb-6 relative">
                    <button type="button" className="w-full px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold">Sign up</button>
                </div>
                <button className="tex-sm">Login</button>
            </div>
        </div>
    );
}

export default SignupPage;