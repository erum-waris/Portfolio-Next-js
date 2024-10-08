

interface ButtonProps {
  text: string;
}

const Button = (props:ButtonProps) => {
  return (
    <button
      className="bg-green-500 mt-10 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
    >
      {props.text}
    </button>
  );
};

export default Button;
