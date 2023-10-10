//no need to use 'next' with express-async-errors
const getAllProductsStatic = async(req, res)=>{
    res.status(200).json({msg: 'products testing route'})
}

const getAllProducts = async(req, res)=>{
    res.status(200).json({msg: 'products route'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}
