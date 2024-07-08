import Image from 'next/image'

export default function Header(){
  return (
    <header className="flex bg-yellow-300">
      <div className="flex-none m-6 pl-6 hidden sm:block">
        <Image
          src="/Universitas-Sriwijaya-Logo.png"
          width={125}
          height={125}
          alt="Unsri Logo"
        />
      </div>
      <h1 className="content-center m-6 sm:text-6xl text-4xl text-nowrap">
        Unsri-Doxxer-5000
      </h1>
    </header>
  )
}
