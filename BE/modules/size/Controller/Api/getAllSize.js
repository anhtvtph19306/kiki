import status from 'http-status'
import catchAsync from "../../../../utils/catchAsync.js";
import { getSize } from '../../Service/size.js';

const getAllSize = catchAsync(async (req, res) => {
    const size = await getSize(req)
    return res.status(status.OK).json(size)
})

export default getAllSize