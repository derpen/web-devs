export default function FormGet() {
  return (
      <div className="bg-gray-50 rounded-md shadow-2xl pb-8">
        <form>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="nama" className="block mb-2 text-md font-bold">Nama Siswa</label>
            <input className="w-full block hover:bg-gray-100 rounded-[3px] p-4 shadow-md focus:outline-blue-500 " type="text" name="nama" id="nama" placeholder="John Unsri" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="nim" className="block mb-2 text-md font-bold">NIM</label>
            <input className="w-full block hover:bg-gray-100 rounded-[3px] p-4 shadow-md focus:outline-blue-500" type="text" name="nim" id="nim" placeholder="09021281924069" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="fakultas" className="block mb-2 text-md font-bold">Fakultas</label>
            <select className="w-full block hover:bg-gray-100 rounded-[3px] p-4 shadow-md bg-white focus:outline-blue-500"  name="fakultas" id="fakultas">
              <option disabled selected className="" />
              <option > One </option>
              <option > Two </option>
              <option > Three </option>
            </select>
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="jurusan" className="block mb-2 text-md font-bold">Jurusan</label>
            <select className="w-full block hover:bg-gray-100 rounded-[3px] p-4 shadow-md bg-white focus:outline-blue-500"  name="jurusan" id="jurusan">
              <option disabled selected className="" />
              <option > One </option>
              <option > Two </option>
              <option > Three </option>
            </select>
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="sma" className="block mb-2 text-md font-bold">SMA</label>
            <select className="w-full block hover:bg-gray-100 rounded-[3px] p-4 shadow-md bg-white focus:outline-blue-500"  name="sma" id="sma">
              <option disabled selected className="" />
              <option > One </option>
              <option > Two </option>
              <option > Three </option>
            </select>
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="year" className="block mb-2 text-md font-bold">Angkatan</label>
            <input className="w-full block hover:bg-gray-100 rounded-[3px] p-4 shadow-md focus:outline-blue-500" type="number" name="year" id="year" placeholder="2019" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="sks" className="block mb-2 text-md font-bold">SKS</label>
            <input className="w-full block hover:bg-gray-100 rounded-[3px] p-4 shadow-md focus:outline-blue-500" type="number" name="sks" id="sks" placeholder="144" />
          </div>
          <div className="relative p-12 mr-5">
            <button type="submit" className="text-white font-bold bg-blue-500 hover:bg-blue-800 absolute bottom-2 right-2 rounded-[3px] p-3"> Cari Data Siswa </button>
          </div>
        </form>
      </div>
  )
}
