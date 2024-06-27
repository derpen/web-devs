import { CollectionBeforeValidateHook } from 'payload/types'
import { v4 as uuidv4 } from 'uuid'

const randomizeID: CollectionBeforeValidateHook = async ({ data }) => {
    if(!data.id){
        const newId = uuidv4()
        return {...data, id: newId}
    }
}

export default randomizeID