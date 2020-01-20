const handleErrors = async (ctx, next) => {
    try {
      await next();
    } 
    catch (err) {
      ctx.status = err.status || 500;
      ctx.body = {
        message: 'error',
        value: err
      }
      ctx.app.emit('error', err, ctx);
    }
}

module.exports = handleErrors;