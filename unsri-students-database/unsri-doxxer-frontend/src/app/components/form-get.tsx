export default function FormGet() {
  return (
      <div className="bg-gray-200 rounded-md shadow-md">
        <form>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="nama" className="block mb-2 text-md font-bold">Nama Siswa</label>
            <input className="w-full block rounded-[3px] p-2 shadow-md focus:outline-blue-500" type="text" name="nama" id="nama" placeholder="Nama siswa" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="nim" className="block mb-2 text-md font-bold">NIM</label>
            <input className="w-full block rounded-[3px] p-2 shadow-md focus:outline-blue-500" type="text" name="nim" id="nim" placeholder="NIM" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="fakultas" className="block mb-2 text-md font-bold">Fakultas</label>
            <input className="w-full block rounded-[3px] p-2 shadow-md focus:outline-blue-500" type="text" name="fakultas" id="fakultas" placeholder="Fakultas" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="jurusan" className="block mb-2 text-md font-bold">Jurusan</label>
            <input className="w-full block rounded-[3px] p-2 shadow-md focus:outline-blue-500" type="text" name="jurusan" id="jurusan" placeholder="Jurusan" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="sma" className="block mb-2 text-md font-bold">SMA</label>
            <input className="w-full block rounded-[3px] p-2 shadow-md focus:outline-blue-500" type="text" name="sma" id="sma" placeholder="SMA" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="year" className="block mb-2 text-md font-bold">Year</label>
            <input className="w-full block rounded-[3px] p-2 shadow-md focus:outline-blue-500" type="text" name="year" id="year" placeholder="Year" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="sks" className="block mb-2 text-md font-bold">SKS</label>
            <input className="w-full block rounded-[3px] p-2 shadow-md focus:outline-blue-500" type="number" name="sks" id="sks" placeholder="SKS" />
          </div>
          <div className="pl-6 pr-6 pt-6">
            <label htmlFor="image" className="block mb-2 text-md font-bold">Image</label>
            <input className="w-full block rounded-[3px] p-2 shadow-md focus:outline-blue-500" type="text" name="image" id="image" />
          </div>
          <div className="relative p-8">
            <button type="submit" className="text-white font-bold bg-blue-500 hover:bg-blue-800 absolute bottom-2 right-2 rounded-[3px] p-3"> Get Data </button>
          </div>
        </form>
      </div>
  )
}
