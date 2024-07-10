import Image from 'next/image'

export default function Header(){
  return (
    <header className="flex bg-yellow-300 fixed w-full">
      <div className="flex-none m-6 pl-6 hidden sm:block">
        <Image
          src="/Universitas-Sriwijaya-Logo.png"
          width={75}
          height={75}
          alt="Unsri Logo"
        />
      </div>
      <h1 className="w-full text-center sm:text-left content-center place-items-center m-6 text-4xl text-nowrap">
        Unsri-Doxxer-5000
      </h1>
    </header>
  )
}
