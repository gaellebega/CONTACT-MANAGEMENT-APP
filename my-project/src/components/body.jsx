
import { useState } from "react";
import Footer from "./footer";
import Header from "./header";

const Body = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
      });

const [status, setStatus] = useState({});

  const onFormSubmit = (e) => {
    e.preventDefault();
    setStatus({ success: true, message: "Contact added successfully!" });
  };

  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <>
    <Header />
    <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          placeholder="names"
          value={formState.name}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          placeholder="email"

          value={formState.email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Phone number
        </label>
        <input
        type="tel"
          name="phone"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          id="phone" 
          placeholder="Phone Number"
          value={formState.phone}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="flex items-center justify-center mb-3">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add contact
        </button>
      </div>
      {status.success && (
        <div className="bg-green-500 text-white p-4 rounded mt-4">
          {status.message}
        </div>
      )}
      {status.error && (
        <div className="bg-red-500 text-white p-4 rounded mt-4">
          {status.message}
        </div>
      )}
    </form>
    <div className="flex items-center justify-center mt-3">
      <a href="/Contact"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Update contact</button></a>
    </div>
    <Footer />
    </>
  );
}

export default Body