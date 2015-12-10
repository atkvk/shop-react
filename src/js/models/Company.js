var Company = (function () {
    function Company() {
    }

    Object.defineProperty(Company.prototype, "kvknummer", {
        get: function () {
            return this._kvknr;
        },
        set: function (value) {
            this._kvknr = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Company.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });

    return Company;
})();

module.exports = Company;