import { Field } from "payload/types";

const randomId: Field = {
    name: 'id',
    type: 'text',
    admin: {
        components: {
            Field: () => null,
        }
    }
}

export default randomId