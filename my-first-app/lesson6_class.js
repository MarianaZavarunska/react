var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Userr = /** @class */ (function () {
    function Userr(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    Userr.prototype.getName = function () {
        return this.name;
    };
    return Userr;
}());
var userr = new Userr('Kokos', 22, true);
// console.log(userr.getName());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    function Child(name, age, status) {
        return _super.call(this, name, age, status) || this;
    }
    Child.prototype.getParentName = function () {
        return this.name;
    };
    return Child;
}(Userr));
var userChild = new Child('Vira', 22, true);
userChild.getParentName();
