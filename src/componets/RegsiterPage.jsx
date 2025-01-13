import { useNavigate } from "react-router";
import PropTypes from "prop-types";

RegsiterPage.propTypes = {
  value: PropTypes.any, 
  setvalue: PropTypes.any, // Validate CartItem as an array
};

export default function RegsiterPage({ value, setvalue }) {
  const navigate = useNavigate();

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setvalue({ ...value, [name]: value });
  };

  const handleonsumbit = () => {
    setvalue({ name: "", email: "", password: "" });
    navigate("/home");
  };

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container bg-white p-8 rounded-md shadow-md w-96">
        <div className="mb-4">
          <label className="text-sm font-normal leading-5">Name:</label>
          <br />
          <input
            type="name"
            name="name"
            value={value.name}
            onChange={handleonchange}
            className="border-2 border-red-400 w-full h-[50px] focus:outline-none placeholder:p-3"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-normal leading-5">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleonchange}
            className="border-2 border-red-400 w-full h-[50px] focus:outline-none placeholder:p-3"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-4">
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleonchange}
            className="border-2 border-red-400 w-full h-[50px] focus:outline-none"
            placeholder="Enter password"
          />
        </div>


        <div className="mb-4">
          <button
            onClick={handleonsumbit}
            type="submit"
            style={{
              background:
                "linear-gradient(to right, rgba(75, 0, 110, 1), rgba(145, 0, 212, 1))",
            }}
            className="w-full p-3 text-white font-semibold rounded-md"
          >
            START NEW ACCOUNT
          </button>
        </div>

        <div className="flex justify-center">
          <p className="text-sm">Already have an account? </p>
          <button type="button" className="font-bold ml-2 text-blue-500" onClick={handleRegister}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
