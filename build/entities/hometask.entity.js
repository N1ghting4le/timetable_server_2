"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hometask = void 0;
const typeorm_1 = require("typeorm");
const content_entity_1 = require("./content.entity");
const day_entity_1 = require("./day.entity");
let Hometask = exports.Hometask = class Hometask extends content_entity_1.Content {
};
__decorate([
    (0, typeorm_1.Column)({ type: "text", name: "Subject" }),
    __metadata("design:type", String)
], Hometask.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", name: "Type" }),
    __metadata("design:type", String)
], Hometask.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "json", name: "Teacher" }),
    __metadata("design:type", Object)
], Hometask.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => day_entity_1.Day, (day) => day.hometasks),
    __metadata("design:type", day_entity_1.Day)
], Hometask.prototype, "day", void 0);
exports.Hometask = Hometask = __decorate([
    (0, typeorm_1.Entity)({ name: "Hometasks" })
], Hometask);
//# sourceMappingURL=hometask.entity.js.map