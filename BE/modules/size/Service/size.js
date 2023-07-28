import size from "../Model/size.js"

export const getSize = async (req) => {
    const getall = await size.find()
    return getall
}

export const getSizeId = async (req) => {
    const getId = await size.findById(req.params.id)
    return getId
}

export const addSize = async (req) => {
    const add = await size.create()
    return add
}

export const deleteSize = async (req) => {
    const id = req.params.id
    const remove = await size.findByIdAndDelete(id)
    return remove
}

export const updateSize = async (req) => {
    const id = req.params.id
    const edit = await size.findByIdAndUpdate(id, req.body)
    return edit
}