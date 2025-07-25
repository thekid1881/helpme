import Image from "next/image";

export default function ContributeInfo() {
  return (
    <div className="justify-self-center text-center w-250">
        <a className="bg-[#e1e2f5] decoration-solid decoration-2 text-xl border-solid border-2 border-gray-800 rounded-md p-8"
            href="https://donations.signupgenius.com/help-after-domestic-abuse"
        >
            Contribute Here
        </a>
        <Image
          className="justify-self-center mt-24 rounded-md"
          src="/qr-code.png"
          alt="qrcode"
          width={200}
          height={200}
        />
    </div>
  );
}