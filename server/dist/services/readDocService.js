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
const fs_1 = require("fs");
const path_1 = require("path");
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const readDoc = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pdfPath = (0, path_1.join)(__dirname, "../../../data/legal doc.pdf");
        const dataBuffer = (0, fs_1.readFileSync)(pdfPath);
        const data = yield (0, pdf_parse_1.default)(dataBuffer);
        return data.text;
    }
    catch (err) {
        console.error(err);
    }
});
exports.default = readDoc;
