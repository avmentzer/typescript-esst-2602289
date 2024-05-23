"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
function Challenge() {
    var myFunction = function (requiredNumber, optionalString) {
        console.log(requiredNumber, optionalString);
    };
    myFunction(100);
    myFunction(100, "Foo!");
}
exports.Challenge = Challenge;
