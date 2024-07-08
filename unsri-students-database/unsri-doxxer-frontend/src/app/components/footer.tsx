export default function Footer(){
  return (
    <footer className="min-h-screen bg-gray-800 text-white content-center flex p-5 justify-between">
      <div className="p-2">
        <p>
          Unsri-Doxxer-5000, the best way to dox some dudes
        </p>
        <p>
          Copyleft, 2024 @derpen
        </p>
      </div>
      <div className="flex">
        <p className="p-2">
          V 1.0
        </p>
        <p className="p-2">
          License: GPL 3.0
        </p>
        {/* TODO: This should be link */}
        <p className="p-2">
          Github
        </p>
      </div>

    </footer>
  )
}
