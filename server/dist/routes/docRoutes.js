"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const embedDocController_1 = __importDefault(require("../controller/embedDocController"));
const genResponseController_1 = __importDefault(require("../controller/genResponseController"));
const router = express_1.default.Router();
router.get("/embed", embedDocController_1.default);
router.post("/query", genResponseController_1.default);
exports.default = router;
