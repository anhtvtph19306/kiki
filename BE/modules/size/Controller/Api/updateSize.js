import catchAsync from "../../../../utils/catchAsync.js";
import status from "http-status"
import size from "../../Model/size.js";
import { updateSize } from "../../Service/size.js";

const editSize = catchAsync(async (req, res) => {
    const size = await updateSize(req)
    return res.status(status.OK).json(size)
})

export default editSize