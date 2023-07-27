import catchAsync from "../../../../utils/catchAsync.js";
import status from "http-status"
import size from "../../Model/size.js";
import { updateSize } from "../../Service/size.js";

const editSize = catchAsync(async (req, res) => {

    const newsize = await size.findOne({
        name: req.body.name
    })
    if (newsize) {
        return res.status(status.BAD_REQUEST).json("Size này đã tồn tại")
    } else {
        const size = await updateSize(req)
        return res.status(status.OK).json(size)
    }
})

export default editSize