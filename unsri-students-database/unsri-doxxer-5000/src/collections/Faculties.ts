import { CollectionConfig } from "payload/types";
import randomizeID from '../hooks/randomizeId'
import randomId from '../fields/randomId'

const Faculties: CollectionConfig = {
    slug: "faculties",
    hooks: {
        beforeValidate: [
            randomizeID
        ]
    },
    fields: [
        randomId,
        {
            name: "faculty",
            type: "text",
            label: "Fakultas",
            required: true,
        },
    ],
    admin: {
        useAsTitle: 'faculty',
    }
};

export default Faculties;