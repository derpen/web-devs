import { CollectionConfig } from "payload/types";
import randomizeID from '../hooks/randomizeId'
import randomId from '../fields/randomId'

// export type Type = {
//     filename: string
//     alt: string
// }

const Media: CollectionConfig = {
    slug: 'media',
    hooks: {
        beforeValidate: [
            randomizeID,
        ]
    },
    access: {
        read: (): boolean => true,
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        mimeTypes: ['image/*'],
        // adminThumbnail: ({ doc }) =>
        //     `/media/${doc.filename}`,
    },
    admin: {
        useAsTitle: 'filename',
    },
    fields: [
        randomId,
        {
            name: 'alt',
            type: 'text',
            label: 'Alternate Text',
            required: true,
        }

    ]
}

export default Media