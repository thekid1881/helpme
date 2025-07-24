import Link from "next/link";

import StoryBulletedList from "@/components/StoryBulletedList";

export default function Story() {
    return (
        <div>
            <div className="font-sans bg-[#94cce0] items-center justify-items-center min-h-screen pt-12">
                <h1 className="text-center text-5xl font-bold mb-12">
                    My Story
                </h1>
                <StoryBulletedList />
                <div className="flex flex-row items-center justify-self-center mt-8 mb-6">
                    <Link
                        href='/'
                        className="bg-[#3f44e0] text-white border-solid border-2 border-gray-600 rounded-md p-4 m-6"
                    >
                        Home
                    </Link>
                    <Link
                        href="/contribute"
                        className="bg-[#3f44e0] text-white border-solid border-2 border-gray-600 rounded-md p-4 m-6"
                    >
                        Contribute
                    </Link>
            </div>
            </div>
            
        </div>
    );
}