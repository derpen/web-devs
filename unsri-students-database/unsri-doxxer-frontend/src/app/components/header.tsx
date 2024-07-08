import Image from 'next/image'

export default function Header(){
  return (
    <header>
      <Image
        src="/Universitas-Sriwijaya-Logo.png"
        width={125}
        height={125}
        alt="Unsri Logo"
      />
      <h1>
        This one is a header :D
      </h1>
    </header>
  )
}
