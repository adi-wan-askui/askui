"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestStepResultDto = void 0;
const test_step_state_1 = require("./test-step-state");
class TestStepResultDto {
    constructor(state, comment = '', createDate = new Date(), updateDate = new Date()) {
        this.state = state;
        this.comment = comment;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
    static fromJson(testStepResult) {
        return new TestStepResultDto(test_step_state_1.TestStepState[testStepResult.state], testStepResult.comment, new Date(testStepResult.createDate), new Date(testStepResult.updateDate));
    }
}
exports.TestStepResultDto = TestStepResultDto;
