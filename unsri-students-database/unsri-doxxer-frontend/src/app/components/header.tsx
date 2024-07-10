import Image from 'next/image'

export default function Header(){
  return (
    <header className="flex bg-yellow-300 fixed w-full italic font-mono font-bold shadow-lg">
      <div className="flex-none m-6 pl-6 hidden sm:block">
        <Image
          src="/Universitas-Sriwijaya-Logo.png"
          width={75}
          height={75}
          alt="Unsri Logo"
        />
      </div>
      <a href="#" className="w-full text-gray-200 text-center sm:text-left content-center place-items-center m-6 text-xl text-nowrap sm:text-4xl"> 
        <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Unsri-Doxxer-5000
        </h1>
      </a>
    </header>
  )
}
