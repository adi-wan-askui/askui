import { TestStepState } from './test-step-state';
export class TestStepResultDto {
    constructor(state, comment = '', createDate = new Date(), updateDate = new Date()) {
        this.state = state;
        this.comment = comment;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
    static fromJson(testStepResult) {
        return new TestStepResultDto(TestStepState[testStepResult.state], testStepResult.comment, new Date(testStepResult.createDate), new Date(testStepResult.updateDate));
    }
}
