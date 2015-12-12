var Product = (function () {
    function Product() {
    }

    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });

    return Product;
})();

module.exports = Product;