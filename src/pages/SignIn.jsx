import React from 'react';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
      <div className="bg-[#0d0d0d] p-12 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-500">Sign In</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 transition-all py-3 rounded-xl font-bold"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-gray-400 text-sm">
          Don't have an account? <a href="/SignUp" className="text-purple-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
