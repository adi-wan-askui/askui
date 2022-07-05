import { TestStepState } from './test-step-state';
export declare class TestStepResultDto {
    state: TestStepState;
    comment: string;
    createDate: Date;
    updateDate: Date;
    constructor(state: TestStepState, comment?: string, createDate?: Date, updateDate?: Date);
    static fromJson(testStepResult: TestStepResultDto): TestStepResultDto;
}
