'use client'

import { useState } from 'react';
import FormSet from "./components/form-set";
import FormGet from "./components/form-get";

type FormType = 'get' | 'set'

export default function Home() {
  const [activeForm, setActiveForm] = useState('get')

  const toggleForm = (form: FormType) => {
    setActiveForm(form)
  }

  return (
    <div className="p-7 bg-gradient-to-b from-slate-100 to-gray-500 pt-28 sm:pt-36">
      <div className="p-4 bg-yellow-200 rounded-lg shadow-lg pb-12">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => toggleForm('get')}
            className={`py-2 px-4 rounded ${activeForm === 'get' ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${activeForm === 'get' ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}`}
          >
            Cari Data Siswa
          </button>
          <button
            onClick={() => toggleForm('set')}
            className={`py-2 px-4 rounded ${activeForm === 'set' ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${activeForm === 'set' ? 'hover:bg-blue-600' : 'hover:bg-gray-300'}`}
          >
            Tambah Data Siswa
          </button>
        </div>

        {activeForm === 'get' && (
          <div>
            <FormGet />
          </div>
        )}

        {activeForm === 'set' && (
          <div>
            <FormSet />
          </div>
        )}
      </div>
    </div>
  );
}
