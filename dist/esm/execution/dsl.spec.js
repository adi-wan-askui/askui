var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FluentCommand } from './dsl';
class TestCommand extends FluentCommand {
    // eslint-disable-next-line class-methods-use-this
    exec(instruction, customElements) {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-console
            console.log(`${instruction} ${customElements}`);
            return Promise.resolve();
        });
    }
}
describe('DSL', () => {
    describe('custom element', () => {
        test('should call exec function with zero custom element', () => __awaiter(void 0, void 0, void 0, function* () {
            const underTest = new TestCommand();
            const testCommandSpy = jest.spyOn(underTest, 'exec');
            yield underTest.click().button()
                .exec();
            expect(testCommandSpy).toHaveBeenCalledWith('Click on button', []);
        }));
        test('should call exec function with one custom element', () => __awaiter(void 0, void 0, void 0, function* () {
            const underTest = new TestCommand();
            const testCommandSpy = jest.spyOn(underTest, 'exec');
            yield underTest.click().customElement({
                customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
                imageCompareFormat: 'grayscale',
                name: 'custom element 1',
            }).button()
                .exec();
            expect(testCommandSpy).toHaveBeenCalledWith('Click on custom element button', [{
                    customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
                    imageCompareFormat: 'grayscale',
                    name: 'custom element 1',
                }]);
        }));
        test('should call exec function with two custom element', () => __awaiter(void 0, void 0, void 0, function* () {
            const underTest = new TestCommand();
            const testCommandSpy = jest.spyOn(underTest, 'exec');
            yield underTest.click().customElement({
                customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
                imageCompareFormat: 'grayscale',
                name: 'custom element 1',
            })
                .button()
                .customElement({
                customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
                imageCompareFormat: 'grayscale',
                name: 'custom element 2',
            })
                .exec();
            expect(testCommandSpy).toHaveBeenCalledWith('Click on custom element button custom element', [{
                    customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
                    imageCompareFormat: 'grayscale',
                    name: 'custom element 1',
                },
                {
                    customImage: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
                    imageCompareFormat: 'grayscale',
                    name: 'custom element 2',
                },
            ]);
        }));
    });
});
