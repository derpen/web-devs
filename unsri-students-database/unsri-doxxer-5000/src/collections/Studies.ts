import { CollectionConfig } from "payload/types";
import randomizeID from '../hooks/randomizeId'
import randomId from '../fields/randomId'

const Study: CollectionConfig = {
    slug: "studies",
    hooks: {
        beforeValidate: [
            randomizeID
        ]
    },
    fields: [
        randomId,
        {
            name: 'faculty_list',
            type: 'relationship',
            relationTo: 'faculties',
            label: 'Fakultas',
            required: true,
        },
        {
            name: "study",
            type: "text",
            label: "Jurusan",
            required: true,
            admin: {
                condition: (_, siblingData) => {
                    return siblingData.faculty_list
                },
            },
        },
    ],
    admin: {
        useAsTitle: 'study',
    }
};

export default Study;