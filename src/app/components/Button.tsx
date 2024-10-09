import Link from "next/link";


interface ButtonProps {
  text: string;
  href?: string;
}

const Button = (props:ButtonProps) => {
  return (
    <button
      className="bg-green-500 mt-10 ml-5 text-white text-xl font-bold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
    >
 
      <Link href={props.href ? props.href : "/"}> {props.text}</Link>
    </button>
  );
};

export default Button;
