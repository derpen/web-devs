import { CollectionConfig } from "payload/types";
import randomizeID from '../hooks/randomizeId'
import randomId from '../fields/randomId'

const Schools: CollectionConfig = {
    slug: 'schools',
    hooks: {
        beforeValidate: [
            randomizeID
        ]
    },
    fields: [
        randomId,
        {
            name: 'school_name',
            type: 'text',
            label: 'Nama SMA',
            required: true,
        }
    ],
    admin: {
        useAsTitle: 'school_name',
    }
}

export default Schools;