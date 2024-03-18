var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export default class RestClient {
    constructor(url) {
        this.client = axios.create({
            baseURL: url,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    get(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.client.get(uri).catch((err) => {
                throw err.response.data;
            });
            return result.data;
        });
    }
    post(uri, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.client.post(uri, body).catch((err) => {
                throw err.response.data;
            });
            return result.data;
        });
    }
    delete(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.client.delete(uri).catch((err) => {
                throw err.response.data;
            });
            return result.data;
        });
    }
}
