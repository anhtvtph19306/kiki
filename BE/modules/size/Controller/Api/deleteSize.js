import status from 'http-status'
import catchAsync from "../../../../utils/catchAsync.js";
import { deleteSize } from '../../Service/size.js';


const deleteSizes = catchAsync(async (req, res) => {
    const remove = await deleteSize(req)
    return res.status(status.OK).json(remove)
})
export default deleteSizes