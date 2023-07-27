import getAllSize from './Api/getAllSize.js';
import addSizes from './Api/addSize.js';
import getOneSize from './Api/getOneSize.js';
import deleteSizes from './Api/deleteSize.js';
import editSize from './Api/updateSize.js';

const sizeController = {
    getAllSize,
    getOneSize,
    addSizes,
    deleteSizes,
    editSize
}
export default sizeController