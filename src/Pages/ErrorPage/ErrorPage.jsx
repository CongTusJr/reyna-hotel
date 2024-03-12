import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Oops!</h1>
      <p className="text-lg mb-4 text-gray-800">Sorry, an unexpected error has occurred.</p>
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
}
