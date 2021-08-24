const errorHandle = (err, req, res, next) => {
    let statusCode  = 500

    let data = {
        message: 'Internal Server error',
        originalError: err.message
    }
}


export default errorHandle