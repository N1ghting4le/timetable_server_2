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
exports.Day = void 0;
const typeorm_1 = require("typeorm");
const note_entity_1 = require("./note.entity");
const hometask_entity_1 = require("./hometask.entity");
let Day = exports.Day = class Day {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "date", name: "Date" }),
    __metadata("design:type", Date)
], Day.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", name: "Name" }),
    __metadata("design:type", String)
], Day.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", name: "WeekNum" }),
    __metadata("design:type", Number)
], Day.prototype, "weekNum", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_entity_1.Note, (note) => note.day, {
        eager: true
    }),
    __metadata("design:type", Array)
], Day.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => hometask_entity_1.Hometask, (hometask) => hometask.day, {
        eager: true
    }),
    __metadata("design:type", Array)
], Day.prototype, "hometasks", void 0);
exports.Day = Day = __decorate([
    (0, typeorm_1.Entity)({ name: "Days" })
], Day);
//# sourceMappingURL=day.entity.js.map