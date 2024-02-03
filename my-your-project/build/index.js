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
const Posts_1 = require("./Posts");
const LegacyModule_1 = __importDefault(require("LegacyModule"));
function filterPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = 1;
        const posts = yield (0, Posts_1.getPosts)();
        console.log('posts?.data.length', posts === null || posts === void 0 ? void 0 : posts.data.length);
        const filteredPosts = posts.data.filter((p) => p.userId === userId);
        console.log('filteredPosts.length', filteredPosts.length);
        const test = (0, LegacyModule_1.default)(filteredPosts);
        console.log('test', test);
    });
}
filterPosts();
