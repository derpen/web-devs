export default function FormSet() {
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
          <div className="pl-6 pr-6 pt-6">
            <label className="block mb-2 text-md font-bold">Foto Siswa</label>
            <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input name="image" id="image" type="file" className="hidden" />
      </label>
          </div>
          <div className="relative p-12 mr-5">
            <button type="submit" className="text-white font-bold bg-blue-500 hover:bg-blue-800 absolute bottom-2 right-2 rounded-[3px] p-3"> Tambah Data Siswa </button>
          </div>
        </form>
      </div>
  )
}
