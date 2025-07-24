import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-[#94cce0] items-center justify-items-center min-h-screen">
      <main className="justify-center text-center">
        <div className="text-center mb-8">
          <h1 className="font-bold text-6xl p-24">
            Help Me
          </h1>
        </div>
        <div className="flex flex-row items-center justify-self-center mt-14  mb-14">
          <Link
            href='/story'
            className="bg-[#3f44e0] text-white border-solid border-2 border-gray-600 rounded-md p-4 m-6"
          >
            My Story
          </Link>
          <Link
            href="/contribute"
            className="bg-[#3f44e0] text-white border-solid border-2 border-gray-600 rounded-md p-4 m-6"
          >
            Contribute
          </Link>
        </div>
      </main>
    </div>
  );
}
