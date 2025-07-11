"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chromaCollection_1 = __importDefault(require("../chroma-db/chromaCollection"));
const queryDocService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (typeof query !== "string" || query.trim() === "") {
            throw new Error("Invalid query provided.");
        }
        const { collection } = yield chromaCollection_1.default;
        if (!collection) {
            throw new Error("Error retrieving ChromaDB collection.");
        }
        const results = yield collection.query({
            queryTexts: [query],
            nResults: 2,
        });
        return results;
    }
    catch (err) {
        throw new Error(`Query failed: ${err.message}`);
    }
});
exports.default = queryDocService;
