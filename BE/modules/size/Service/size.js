import size from "../Model/size.js"

export const getSize = async (req, res) => {
    const getall = await size.find(req.body)
    return getall
}

export const getSizeId = async (req, res) => {
    const getId = await size.findById(req.params.id)
    return getId
}

export const addSize = async (req, res) => {
    const add = await size.create(req.body)
    return add
}

export const deleteSize = async (req, res) => {
    const id = req.params.id
    const remove = await size.findByIdAndDelete(id)
    return remove
}

export const updateSize = async (req, res) => {
    const id = req.params.id
    const edit = await size.findByIdAndUpdate(id, req.body)
    return edit
}