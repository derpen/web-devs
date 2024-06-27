import { CollectionConfig } from 'payload/types'
import randomizeID from '../hooks/randomizeId'
import randomId from '../fields/randomId'

const Students: CollectionConfig = {
    slug: 'students',
    hooks: {
        beforeValidate: [
            randomizeID
        ]
    },
    fields: [
        randomId,
        {
            name: 'name',
            type: 'text',
            label: 'Nama siswa',
            required: true,
        },
        {
            name: 'NIM',
            type: 'text',
            label: 'NIM siswa',
            required: true,
        },
        {
            name: 'year',
            type: 'number',
            label: 'Angkatan',
            required: true,
        },
        {
            name: 'faculty',
            type: 'relationship',
            relationTo: 'faculties',
            label: 'Fakultas',
            required: true,
        },
        {
            name: 'jurusan',
            label: 'Jurusan',
            type: 'relationship',
            relationTo: 'studies',
            required: true,
            admin: {
                condition: (_, siblingData) => {
                    return siblingData.faculty
                },
            },
            filterOptions: ({ data }) => {
                return {
                    faculty_list: { equals: data?.faculty }
                }
            },
        },
        {
            name: 'SMA',
            type: 'relationship',
            relationTo: 'schools',
            label: 'SMA sebelumnya',
            required: true,
        },
        {
            name: 'SKS',
            type: 'number',
            label: 'Jumlah SKS',
            required: true,
        },
        {
            name: 'picture',
            type: 'upload',
            relationTo: 'media',
            label: 'Foto siswa',
            required: false,
        },
    ],
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 
                        'NIM', 
                        'year', 
                        'faculty', 
                        'jurusan', 
                        'SMA', 
                        'SKS', 
                        // 'picture'
                    ],
    }
}

export default Students
