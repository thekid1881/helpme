import Link from "next/link";

import ContributeInfo from "@/components/ContributeInfo";

export default function Contribute() {
    return (
        <div>
            <div className="font-sans bg-[#94cce0] items-center justify-items-center min-h-screen pt-12">
                <h1 className="text-center text-5xl font-bold mb-12">
                    Please Contribute
                </h1>
                <ContributeInfo />
                <div className="flex flex-row items-center justify-self-center mt-8 mb-6">
                    <Link
                        href='/'
                        className="bg-[#3f44e0] text-white border-solid border-2 border-gray-600 rounded-md p-4 m-6"
                    >
                        Home
                    </Link>
                    <Link
                        href="/story"
                        className="bg-[#3f44e0] text-white border-solid border-2 border-gray-600 rounded-md p-4 m-6"
                    >
                        My Story
                    </Link>
            </div>
            </div>
            
        </div>
    );
}