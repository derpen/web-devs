export default function FormSet() {
  return (
      <div className="bg-gray-400">
        <form>
          <div className="p-2">
            <label htmlFor="nama">Nama Siswa</label>
            <input className="w-full block" type="text" name="nama" id="nama" />
          </div>
          <div className="p-2">
            <label htmlFor="nim">NIM</label>
            <input className="w-full block" type="text" name="nim" id="nim" />
          </div>
          <div className="p-2">
            <label htmlFor="fakultas">Fakultas</label>
            <input className="w-full block" type="text" name="fakultas" id="fakultas" />
          </div>
          <div className="p-2">
            <label htmlFor="jurusan">Jurusan</label>
            <input className="w-full block" type="text" name="jurusan" id="jurusan" />
          </div>
          <div className="p-2">
            <label htmlFor="SMA">SMA</label>
            <input className="w-full block" type="text" name="sma" id="sma" />
          </div>
          <div className="p-2">
            <label htmlFor="year">Year</label>
            <input className="w-full block" type="text" name="year" id="year" />
          </div>
          <div className="p-2">
            <label htmlFor="sks">SKS</label>
            <input className="w-full block" type="text" name="sks" id="sks" />
          </div>
          <div className="p-2">
            <label htmlFor="image">Foto Siswa</label>
            <input className="w-full block" type="file" name="image" id="image" />
          </div>
          <div className="relative p-8">
            <button type="submit" className="bg-yellow-200 absolute bottom-2 right-2">Submit Data</button>
          </div>
        </form>
      </div>
  )
}
