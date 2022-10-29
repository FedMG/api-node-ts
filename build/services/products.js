"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const products_json_1 = __importDefault(require("./products.json"));
const products = products_json_1.default;
const getProducts = () => products;
exports.getProducts = getProducts;
