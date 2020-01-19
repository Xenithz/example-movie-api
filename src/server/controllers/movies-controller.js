const test = (ctx) => {
    ctx.body = {
        message: 'hi'
    };
    ctx.status = 200;
};

module.exports = {
    test
}