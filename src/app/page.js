import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // throw new Error()
  return (
    <div className="p-12">
      <h2>THis is next app</h2>
      <Counter></Counter>
      <Link href='/about'>
        {" "}
        <button className="btn">About</button>
      </Link>
      <Link href='/contact'>
        {" "}
        <button className="btn">Contact</button>
      </Link>
    </div>
  );
};

export default HomePage;
