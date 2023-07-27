import status from "http-status";
import catchAsync from "../../../../utils/catchAsync.js";
import size from "../../Model/size.js";
import { addSize } from "../../Service/size.js";

const addSizes = catchAsync(async (req, res) => {
    const newSize = await size.findOne({
        name: req.body.name
    })
    if (newSize) {
        return res.status(status.BAD_REQUEST).json("size này đã tồn tại")
    } else {
        const sizes = await addSize(req);
        return res.status(status.OK).json(sizes)
    }
})
export default addSizes