import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { getSizeId } from "../../Service/size.js";

const getOneSize = catchAsync(async (req, res) => {
    const size = await getSizeId(req)
    return res.status(status.OK).json(size)
})
export default getOneSize