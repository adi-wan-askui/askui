import { CustomElementJson } from '../core/model/test-case-dto';
export declare type PC_KEY = 'backspace' | 'delete' | 'enter' | 'tab' | 'escape' | 'up' | 'down' | 'right' | 'left' | 'home' | 'end' | 'pageup' | 'pagedown' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' | 'f11' | 'f12' | 'space' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | '!' | '"' | '#' | '$' | '%' | '&' | "'" | '(' | ')' | '*' | '+' | ',' | '-' | '.' | '/' | ':' | ';' | '<' | '=' | '>' | '?' | '@' | '[' | '\\' | ']' | '^' | '_' | '`' | '{' | '|' | '}' | '~ ';
export declare type ANDROID_KEY = 'home' | 'back' | 'call' | 'endcall' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'star' | 'pound' | 'dpad_up' | 'dpad_down' | 'dpad_left' | 'dpad_right' | 'dpad_center' | 'volume_up' | 'volume_down' | 'power' | 'camera' | 'clear' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | 'comma' | 'period' | 'alt_left' | 'alt_right' | 'shift_left' | 'shift_right' | 'tab' | 'space' | 'sym' | 'explorer' | 'envelope' | 'enter' | 'del' | 'grave' | 'minus' | 'equals' | 'left_bracket' | 'right_bracket' | 'backslash' | 'semicolon' | 'apostrophe' | 'slash' | 'at' | 'num' | 'headsethook' | 'focus' | 'plus' | 'menu' | 'notification' | 'search' | 'media_play_pause' | 'media_stop' | 'media_next' | 'media_previous' | 'media_rewind' | 'media_fast_forward' | 'mute' | 'page_up' | 'page_down' | 'switch_charset' | 'escape' | 'forward_del' | 'ctrl_left' | 'ctrl_right' | 'caps_lock' | 'scroll_lock' | 'function' | 'break' | 'move_home' | 'move_end' | 'insert' | 'forward' | 'media_play' | 'media_pause' | 'media_close' | 'media_eject' | 'media_record' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' | 'f11' | 'f12' | 'num_lock' | 'numpad_0' | 'numpad_1' | 'numpad_2' | 'numpad_3' | 'numpad_4' | 'numpad_5' | 'numpad_6' | 'numpad_7' | 'numpad_8' | 'numpad_9' | 'numpad_divide' | 'numpad_multiply' | 'numpad_subtract' | 'numpad_add' | 'numpad_dot' | 'numpad_comma' | 'numpad_enter' | 'numpad_equals' | 'numpad_left_paren' | 'numpad_right_paren' | 'volume_mute' | 'info' | 'channel_up' | 'channel_down' | 'zoom_in' | 'zoom_out' | 'window' | 'guide' | 'bookmark' | 'captions' | 'settings' | 'app_switch' | 'language_switch' | 'contacts' | 'calendar' | 'music' | 'calculator' | 'assist' | 'brightness_down' | 'brightness_up' | 'media_audio_track' | 'sleep' | 'wakeup' | 'pairing' | 'media_top_menu' | 'last_channel' | 'tv_data_service' | 'voice_assist' | 'help' | 'navigate_previous' | 'navigate_next' | 'navigate_in' | 'navigate_out' | 'dpad_up_left' | 'dpad_down_left' | 'dpad_up_right' | 'dpad_down_right' | 'media_skip_forward' | 'media_skip_backward' | 'media_step_forward' | 'media_step_backward' | 'soft_sleep' | 'cut' | 'copy' | 'paste' | 'all_apps' | 'refresh';
export declare type MODIFIER_KEY = 'command' | 'alt' | 'control' | 'shift' | 'right_shift';
export declare type COLOR = 'black' | 'white' | 'red' | 'green' | 'yellow green' | 'orange' | 'yellow' | 'purple' | 'pink' | 'gray' | 'lime green' | 'royal blue';
export declare type PC_AND_MODIFIER_KEY = 'command' | 'alt' | 'control' | 'shift' | 'right_shift' | 'backspace' | 'delete' | 'enter' | 'tab' | 'escape' | 'up' | 'down' | 'right' | 'left' | 'home' | 'end' | 'pageup' | 'pagedown' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' | 'f11' | 'f12' | 'space' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | '!' | '"' | '#' | '$' | '%' | '&' | "'" | '(' | ')' | '*' | '+' | ',' | '-' | '.' | '/' | ':' | ';' | '<' | '=' | '>' | '?' | '@' | '[' | '\\' | ']' | '^' | '_' | '`' | '{' | '|' | '}' | '~ ';
declare abstract class FluentBase {
    protected prev?: FluentBase | undefined;
    constructor(prev?: FluentBase | undefined);
    protected _textStr: string;
    protected _params: Map<string, unknown>;
    protected static addParams(paramsList: Map<string, unknown[]>, params: Map<string, unknown>): Map<string, unknown[]>;
    protected commandStringBuilder(currentInstruction?: string, paramsList?: Map<string, unknown[]>): Promise<void>;
    protected get textStr(): string;
    protected get params(): Map<string, unknown>;
}
export interface Executable {
    exec(): Promise<void>;
}
export declare class Exec extends FluentBase implements Executable {
    exec(): Promise<void>;
}
export declare class FluentFilters extends FluentBase {
    /**
     * Filters for a UI element 'wizard item active'.
     *
     * @return {FluentFiltersOrRelations}
     */
    wizardItemActive(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'wizard item'.
     *
     * @return {FluentFiltersOrRelations}
     */
    wizardItem(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'wizard'.
     *
     * @return {FluentFiltersOrRelations}
     */
    wizard(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'windows bar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    windowsBar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'window'.
     *
     * @return {FluentFiltersOrRelations}
     */
    window(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'video'.
     *
     * @return {FluentFiltersOrRelations}
     */
    video(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'url'.
     *
     * @return {FluentFiltersOrRelations}
     */
    url(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'tooltip'.
     *
     * @return {FluentFiltersOrRelations}
     */
    tooltip(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'textfield'.
     *
     * @return {FluentFiltersOrRelations}
     */
    textfield(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'textarea'.
     *
     * @return {FluentFiltersOrRelations}
     */
    textarea(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'table row'.
     *
     * @return {FluentFiltersOrRelations}
     */
    tableRow(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'table header'.
     *
     * @return {FluentFiltersOrRelations}
     */
    tableHeader(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'table column'.
     *
     * @return {FluentFiltersOrRelations}
     */
    tableColumn(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'table'.
     *
     * @return {FluentFiltersOrRelations}
     */
    table(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'tab selected'.
     *
     * @return {FluentFiltersOrRelations}
     */
    tabSelected(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'tab bar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    tabBar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'tab active'.
     *
     * @return {FluentFiltersOrRelations}
     */
    tabActive(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'tab'.
     *
     * @return {FluentFiltersOrRelations}
     */
    tab(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'switch enabled'.
     *
     * @return {FluentFiltersOrRelations}
     */
    switchEnabled(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'switch disabled'.
     *
     * @return {FluentFiltersOrRelations}
     */
    switchDisabled(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'status bar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    statusBar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'slider indicator'.
     *
     * @return {FluentFiltersOrRelations}
     */
    sliderIndicator(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'slider'.
     *
     * @return {FluentFiltersOrRelations}
     */
    slider(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'sidebar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    sidebar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'scroll bar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    scrollBar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'rect'.
     *
     * @return {FluentFiltersOrRelations}
     */
    rect(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'recaptcha'.
     *
     * @return {FluentFiltersOrRelations}
     */
    recaptcha(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'rate'.
     *
     * @return {FluentFiltersOrRelations}
     */
    rate(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'radio button unselected'.
     *
     * @return {FluentFiltersOrRelations}
     */
    radioButtonUnselected(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'radio button selected'.
     *
     * @return {FluentFiltersOrRelations}
     */
    radioButtonSelected(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'progressbar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    progressbar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'progress bar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    progressBar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'popover'.
     *
     * @return {FluentFiltersOrRelations}
     */
    popover(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'pil'.
     *
     * @return {FluentFiltersOrRelations}
     */
    pil(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'password'.
     *
     * @return {FluentFiltersOrRelations}
     */
    password(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'pager'.
     *
     * @return {FluentFiltersOrRelations}
     */
    pager(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'navigation bar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    navigationBar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'mouse text'.
     *
     * @return {FluentFiltersOrRelations}
     */
    mouseText(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'mouse pointer'.
     *
     * @return {FluentFiltersOrRelations}
     */
    mousePointer(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'mouse cursor'.
     *
     * @return {FluentFiltersOrRelations}
     */
    mouseCursor(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'modal'.
     *
     * @return {FluentFiltersOrRelations}
     */
    modal(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'message box'.
     *
     * @return {FluentFiltersOrRelations}
     */
    messageBox(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'map'.
     *
     * @return {FluentFiltersOrRelations}
     */
    map(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'logo'.
     *
     * @return {FluentFiltersOrRelations}
     */
    logo(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'link'.
     *
     * @return {FluentFiltersOrRelations}
     */
    link(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'keyboard'.
     *
     * @return {FluentFiltersOrRelations}
     */
    keyboard(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'image'.
     *
     * @return {FluentFiltersOrRelations}
     */
    image(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'header'.
     *
     * @return {FluentFiltersOrRelations}
     */
    header(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'footer'.
     *
     * @return {FluentFiltersOrRelations}
     */
    footer(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'flag'.
     *
     * @return {FluentFiltersOrRelations}
     */
    flag(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'dropdown menu'.
     *
     * @return {FluentFiltersOrRelations}
     */
    dropdownMenu(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'divider'.
     *
     * @return {FluentFiltersOrRelations}
     */
    divider(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'circle'.
     *
     * @return {FluentFiltersOrRelations}
     */
    circle(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'checkbox unchecked'.
     *
     * @return {FluentFiltersOrRelations}
     */
    checkboxUnchecked(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'checkbox checked'.
     *
     * @return {FluentFiltersOrRelations}
     */
    checkboxChecked(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'chart pie'.
     *
     * @return {FluentFiltersOrRelations}
     */
    chartPie(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'chart'.
     *
     * @return {FluentFiltersOrRelations}
     */
    chart(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'card'.
     *
     * @return {FluentFiltersOrRelations}
     */
    card(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'browser bar'.
     *
     * @return {FluentFiltersOrRelations}
     */
    browserBar(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'breadcrumb'.
     *
     * @return {FluentFiltersOrRelations}
     */
    breadcrumb(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'banner'.
     *
     * @return {FluentFiltersOrRelations}
     */
    banner(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'badge'.
     *
     * @return {FluentFiltersOrRelations}
     */
    badge(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'alert'.
     *
     * @return {FluentFiltersOrRelations}
     */
    alert(): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'unknown'.
     *
     * @return {FluentFiltersOrRelations}
     */
    unknown(): FluentFiltersOrRelations;
    /**
     * Filters for an UI element 'button'.
     *
     * @return {FluentFiltersOrRelations}
     */
    button(): FluentFiltersOrRelations;
    /**
     * Filters for an UI element 'text'.
     *
     * @return {FluentFiltersOrRelations}
     */
    text(): FluentFiltersOrRelations;
    /**
     * Filters for an UI element 'dropdown'.
     *
     * @return {FluentFiltersOrRelations}
     */
    dropdown(): FluentFiltersOrRelations;
    /**
     * Filters for an UI element 'icon'.
     *
     * @return {FluentFiltersOrRelations}
     */
    icon(): FluentFiltersOrRelations;
    /**
     * Filters for a custom UI element (see {@link CustomElementJson}).
     *
     * **Important**: This increases the runtime quite a bit. So
     *  only use it when absolutely necessary.
     *
     * @param {CustomElementJson} customElement - The custom element to filter for.
     *
     * @return {FluentFiltersOrRelations}
     */
    customElement(customElement: CustomElementJson): FluentFiltersOrRelations;
    /**
     * Filters for a UI element 'checkbox' checked or unchecked.
     *
     * @return {FluentFiltersOrRelations}
     */
    checkbox(): FluentFiltersOrRelations;
    /**
     * Filters for similar (doesn't need to be a 100% equal) text.
     *
     * **Examples:**
     * ```typescript
     * 'text' === withText('text') => true
     * 'test' === withText('text') => true
     * 'other' === withText('text') => false
     * ```
     *
     * @param {string} text - A text to be matched.
     *
     * @return {FluentFiltersOrRelations}
     */
    withText(text: string): FluentFiltersOrRelations;
    /**
     * Filters for equal text.
     *
     * **Note:** This should be only used in cases where the similarity
     *  comparison of {@link FluentFilters.withText()} allows not for
     *  specific enough filtering (too many elements).
     *
     * **Examples:**
     * ```typescript
     * 'text' === withExactText('text') => true
     * 'test' === withExactText('text') => false
     * 'other' === withExactText('text') => false
     * ```
     *
     * @param {string} text - A text to be matched.
     *
     * @return {FluentFiltersOrRelations}
     */
    withExactText(text: string): FluentFiltersOrRelations;
    /**
     * Filters for text containing the text provided as an argument.
     *
     * **Examples:**
     * ```typescript
     * 'This is an text' === containsText('text') => true
     * 'This is an text' === containsText('other text') => false
     * 'This is an text' === containsText('other') => false
     * ```
     *
     * @param {string} text - A text to be matched.
     *
     * @return {FluentFiltersOrRelations}
     */
    containsText(text: string): FluentFiltersOrRelations;
    /**
     * Filters for elements having a specific color.
     *
     * @param {COLOR} color - A color to match
     *
     * @return {FluentFiltersOrRelations}
     */
    colored(color: COLOR): FluentFiltersOrRelations;
}
export declare class FluentFiltersOrRelations extends FluentFilters {
    /**
     * Filters for an element inside another element.
     *
     * **Examples:**
     * ```typescript
     * --------------------
     * |     outerEl      |
     * |  --------------  |
     * |  |  innerEl   |  |
     * |  --------------  |
     * |                  |
     * --------------------
     *
     * // Returns innerEl because innerEl is inside outerEl
     * ...innerEl().in().outerEl()
     * // Returns nothing because innerEl is not inside outerEl
     * ...outerEl().in().innerEl()
     * ```
     *
     * @return {FluentFilters}
     */
    in(): FluentFilters;
    /**
     * Filters for an element right of another element.
     *
     * **Examples:**
     * ```typescript
     * --------------  --------------
     * |  leftEl    |  |  rightEl   |
     * --------------  --------------
     *
     * // Returns rightEl because rightEl is right of leftEl
     * ...rightEl().rightOf().leftEl()
     * // Returns no element because leftEl is left of rightEl
     * ...leftEl().rightOf().rightEl()
     * ```
     *
     * @return {FluentFilters}
     */
    rightOf(): FluentFilters;
    /**
     * Filters for an element left of another element.
     *
     * **Examples:**
     * ```typescript
     * --------------  --------------
     * |  leftEl    |  |  rightEl   |
     * --------------  --------------
     *
     * // Returns leftEl because leftEl is left of rightEl
     * ...leftEl().leftOf().rightEl()
     * // Returns no element because rightEl is left of leftEl
     * ...rightEl().leftOf().leftEl()
     * ```
     *
     * @return {FluentFilters}
     */
    leftOf(): FluentFilters;
    /**
     * Filters for an element below another element.
     *
     * **Examples:**
     * ```typescript
     * --------------
     * |    text    |
     * --------------
     * --------------
     * |   button   |
     * --------------
     *
     * // Returns button because button is below text
     * ...button().below().text()
     * // Returns no element because text is above button
     * ...text().below().button()
     * ```
     *
     * @return {FluentFilters}
     */
    below(): FluentFilters;
    /**
     * Filters for an element above another element.
     *
     * **Examples:**
     * ```typescript
     * --------------
     * |    text    |
     * --------------
     * --------------
     * |   button   |
     * --------------
     *
     * // Returns text because text is above button
     * ...text().above().button()
     * // Returns no element because button is below text
     * ...button().above().text()
     * ```
     *
     * @return {FluentFilters}
     */
    above(): FluentFilters;
    /**
     * Filters for an element nearest to another element.
     *
     * **Examples:**
     * ```typescript
     * --------------
     * |  button 1  |
     * --------------
     * --------------
     * |   text     |
     * --------------
     *
     *
     *
     * --------------
     * |  button 2  |
     * --------------
     *
     * // Returns button 1 because button 1 is nearer to the text than button 2
     * ...button().nearestTo().text()
     * ```
     *
     * @return {FluentFilters}
     */
    nearestTo(): FluentFilters;
    /**
     * Filters for an element containing another element.
     *
     * **Example:**
     * ```typescript
     * --------------------
     * |     outerEl      |
     * |  --------------  |
     * |  |  innerEl   |  |
     * |  --------------  |
     * |                  |
     * --------------------
     *
     * // Returns outerEl because outerEl contains innerEl
     * ...outerEl().contains().innerEl()
     * //  Returns no element because innerEl contains no outerEl
     * ...innerEl().contains().outerEl()
     * ```
     *
     * @return {FluentFilters}
     */
    contains(): FluentFilters;
    exec(): Promise<void>;
}
export declare class FluentFiltersCondition extends FluentBase {
    /**
     * Filters for a UI element 'wizard item active'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    wizardItemActive(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'wizard item'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    wizardItem(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'wizard'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    wizard(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'windows bar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    windowsBar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'window'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    window(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'video'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    video(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'url'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    url(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'tooltip'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    tooltip(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'textfield'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    textfield(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'textarea'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    textarea(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'table row'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    tableRow(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'table header'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    tableHeader(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'table column'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    tableColumn(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'table'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    table(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'tab selected'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    tabSelected(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'tab bar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    tabBar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'tab active'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    tabActive(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'tab'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    tab(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'switch enabled'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    switchEnabled(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'switch disabled'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    switchDisabled(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'status bar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    statusBar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'slider indicator'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    sliderIndicator(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'slider'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    slider(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'sidebar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    sidebar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'scroll bar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    scrollBar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'rect'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    rect(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'recaptcha'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    recaptcha(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'rate'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    rate(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'radio button unselected'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    radioButtonUnselected(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'radio button selected'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    radioButtonSelected(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'progressbar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    progressbar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'progress bar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    progressBar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'popover'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    popover(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'pil'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    pil(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'password'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    password(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'pager'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    pager(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'navigation bar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    navigationBar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'mouse text'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    mouseText(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'mouse pointer'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    mousePointer(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'mouse cursor'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    mouseCursor(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'modal'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    modal(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'message box'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    messageBox(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'map'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    map(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'logo'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    logo(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'link'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    link(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'keyboard'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    keyboard(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'image'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    image(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'header'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    header(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'footer'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    footer(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'flag'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    flag(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'dropdown menu'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    dropdownMenu(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'divider'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    divider(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'circle'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    circle(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'checkbox unchecked'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    checkboxUnchecked(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'checkbox checked'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    checkboxChecked(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'chart pie'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    chartPie(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'chart'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    chart(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'card'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    card(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'browser bar'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    browserBar(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'breadcrumb'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    breadcrumb(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'banner'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    banner(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'badge'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    badge(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'alert'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    alert(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'unknown'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    unknown(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for an UI element 'button'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    button(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for an UI element 'text'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    text(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for an UI element 'dropdown'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    dropdown(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for an UI element 'icon'.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    icon(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a custom UI element (see {@link CustomElementJson}).
     *
     * **Important**: This increases the runtime quite a bit. So
     *  only use it when absolutely necessary.
     *
     * @param {CustomElementJson} customElement - The custom element to filter for.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    customElement(customElement: CustomElementJson): FluentFiltersOrRelationsCondition;
    /**
     * Filters for a UI element 'checkbox' checked or unchecked.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    checkbox(): FluentFiltersOrRelationsCondition;
    /**
     * Filters for similar (doesn't need to be a 100% equal) text.
     *
     * **Examples:**
     * ```typescript
     * 'text' === withText('text') => true
     * 'test' === withText('text') => true
     * 'other' === withText('text') => false
     * ```
     *
     * @param {string} text - A text to be matched.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    withText(text: string): FluentFiltersOrRelationsCondition;
    /**
     * Filters for equal text.
     *
     * **Note:** This should be only used in cases where the similarity
     *  comparison of {@link FluentFilters.withText()} allows not for
     *  specific enough filtering (too many elements).
     *
     * **Examples:**
     * ```typescript
     * 'text' === withExactText('text') => true
     * 'test' === withExactText('text') => false
     * 'other' === withExactText('text') => false
     * ```
     *
     * @param {string} text - A text to be matched.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    withExactText(text: string): FluentFiltersOrRelationsCondition;
    /**
     * Filters for text containing the text provided as an argument.
     *
     * **Examples:**
     * ```typescript
     * 'This is an text' === containsText('text') => true
     * 'This is an text' === containsText('other text') => false
     * 'This is an text' === containsText('other') => false
     * ```
     *
     * @param {string} text - A text to be matched.
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    containsText(text: string): FluentFiltersOrRelationsCondition;
    /**
     * Filters for elements having a specific color.
     *
     * @param {COLOR} color - A color to match
     *
     * @return {FluentFiltersOrRelationsCondition}
     */
    colored(color: COLOR): FluentFiltersOrRelationsCondition;
}
export declare class FluentFiltersOrRelationsCondition extends FluentFiltersCondition {
    /**
     * Filters for an element inside another element.
     *
     * **Examples:**
     * ```typescript
     * --------------------
     * |     outerEl      |
     * |  --------------  |
     * |  |  innerEl   |  |
     * |  --------------  |
     * |                  |
     * --------------------
     *
     * // Returns innerEl because innerEl is inside outerEl
     * ...innerEl().in().outerEl()
     * // Returns nothing because innerEl is not inside outerEl
     * ...outerEl().in().innerEl()
     * ```
     *
     * @return {FluentFiltersCondition}
     */
    in(): FluentFiltersCondition;
    /**
     * Filters for an element right of another element.
     *
     * **Examples:**
     * ```typescript
     * --------------  --------------
     * |  leftEl    |  |  rightEl   |
     * --------------  --------------
     *
     * // Returns rightEl because rightEl is right of leftEl
     * ...rightEl().rightOf().leftEl()
     * // Returns no element because leftEl is left of rightEl
     * ...leftEl().rightOf().rightEl()
     * ```
     *
     * @return {FluentFiltersCondition}
     */
    rightOf(): FluentFiltersCondition;
    /**
     * Filters for an element left of another element.
     *
     * **Examples:**
     * ```typescript
     * --------------  --------------
     * |  leftEl    |  |  rightEl   |
     * --------------  --------------
     *
     * // Returns leftEl because leftEl is left of rightEl
     * ...leftEl().leftOf().rightEl()
     * // Returns no element because rightEl is left of leftEl
     * ...rightEl().leftOf().leftEl()
     * ```
     *
     * @return {FluentFiltersCondition}
     */
    leftOf(): FluentFiltersCondition;
    /**
     * Filters for an element below another element.
     *
     * **Examples:**
     * ```typescript
     * --------------
     * |    text    |
     * --------------
     * --------------
     * |   button   |
     * --------------
     *
     * // Returns button because button is below text
     * ...button().below().text()
     * // Returns no element because text is above button
     * ...text().below().button()
     * ```
     *
     * @return {FluentFiltersCondition}
     */
    below(): FluentFiltersCondition;
    /**
     * Filters for an element above another element.
     *
     * **Examples:**
     * ```typescript
     * --------------
     * |    text    |
     * --------------
     * --------------
     * |   button   |
     * --------------
     *
     * // Returns text because text is above button
     * ...text().above().button()
     * // Returns no element because button is below text
     * ...button().above().text()
     * ```
     *
     * @return {FluentFiltersCondition}
     */
    above(): FluentFiltersCondition;
    /**
     * Filters for an element nearest to another element.
     *
     * **Examples:**
     * ```typescript
     * --------------
     * |  button 1  |
     * --------------
     * --------------
     * |   text     |
     * --------------
     *
     *
     *
     * --------------
     * |  button 2  |
     * --------------
     *
     * // Returns button 1 because button 1 is nearer to the text than button 2
     * ...button().nearestTo().text()
     * ```
     *
     * @return {FluentFiltersCondition}
     */
    nearestTo(): FluentFiltersCondition;
    /**
     * Filters for an element containing another element.
     *
     * **Example:**
     * ```typescript
     * --------------------
     * |     outerEl      |
     * |  --------------  |
     * |  |  innerEl   |  |
     * |  --------------  |
     * |                  |
     * --------------------
     *
     * // Returns outerEl because outerEl contains innerEl
     * ...outerEl().contains().innerEl()
     * //  Returns no element because innerEl contains no outerEl
     * ...innerEl().contains().outerEl()
     * ```
     *
     * @return {FluentFiltersCondition}
     */
    contains(): FluentFiltersCondition;
    /**
     * Expects that filtered element exists.
     *
     * @return {ExecCondition}
     */
    exists(): ExecCondition;
    /**
     * Expects that filtered element does not exist.
     *
     * @return {ExecCondition}
     */
    notExists(): ExecCondition;
}
declare class ExecCondition extends Exec {
}
export declare abstract class FluentCommand extends FluentBase {
    constructor();
    /**
     * Expects a condition, e.g., `exists()` or `notExits()`,
     *  e.g., `...expect().text().withText('Login').exists()`.
     *
     * @return {FluentFiltersCondition}
     */
    expect(): FluentFiltersCondition;
    /**
     * Clicks on the filtered element.
     *
     * @return {FluentFilters}
     */
    click(): FluentFilters;
    /**
     * Move mouse over the filtered element.
     *
     * @return {FluentFilters}
     */
    moveMouseTo(): FluentFilters;
    /**
     * Types a text inside the filtered element.
     *
     * @param {string} text - A text to type
     *
     * @return {FluentFilters}
     */
    typeIn(text: string): FluentFilters;
    /**
     * Moves mouse to the filtered element and scrolls in the x and y direction
     *
     * @param {number} x_offset - A (positive/negative) x direction.
     * @param {number} y_offset - A (positive/negative) y direction.
     *
     * @return {FluentFilters}
     */
    scrollInside(x_offset: number, y_offset: number): FluentFilters;
    /**
     * Moves the mouse relatively to an element in the direction.
     * This can be used when the mouse should not hover over on an element anymore.
     *
     * @param {number} x_offset - A (positive/negative) x direction.
     * @param {number} y_offset - A (positive/negative) y direction.
     *
     * @return {FluentFilters}
     */
    moveMouseRelativelyTo(x_offset: number, y_offset: number): FluentFilters;
    /**
     * Swipe an element in the x and y direction
     *
     * @param {number} x_offset - A x direction. positive an negative values are accepted
     * @param {number} y_offset - A y direction. positive an negative values are accepted
     *
     * @return {FluentFilters}
     */
    swipe(x_offset: number, y_offset: number): FluentFilters;
    /**
     * Types a text at the current position.
     *
     * @param {string} text - A text to type
     *
     * @return {Exec}
     */
    type(text: string): Exec;
    /**
     * Moves the mouse from the current position (relative) in x and y direction.
     *
     * @param {number} x_offset - A (positive/negative) x direction.
     * @param {number} y_offset - A (positive/negative) y direction.
     *
     * @return {Exec}
     */
    moveMouseRelatively(x_offset: number, y_offset: number): Exec;
    /**
     * Moves the mouse to the absolute x and y coordinates.
     *
     * @param {number} x_coordinate - A (positive/negative) x coordinate.
     * @param {number} y_coordinate - A (positive/negative) y coordinate.
     *
     * @return {Exec}
     */
    moveMouse(x_coordinate: number, y_coordinate: number): Exec;
    /**
     * Scrolls based on the current mouse position in the x and y direction.
     *
     * **Important**: Mouse must be positioned in a scrollable area.
     *
     * @param {number} x_offset - A (positive/negative) x direction.
     * @param {number} y_offset - A (positive/negative) y direction.
     *
     * @return {Exec}
     */
    scroll(x_offset: number, y_offset: number): Exec;
    /**
     * Executes a shell command.
     *
     * @param {string} shell_command - A shell command which is executed.
     *
     * @return {Exec}
     */
    execOnShell(shell_command: string): Exec;
    /**
     * Clicks with left mouse key.
     *
     * @return {Exec}
     */
    mouseLeftClick(): Exec;
    /**
     * Clicks with right mouse key.
     *
     * @return {Exec}
     */
    mouseRightClick(): Exec;
    /**
     * Clicks with middle mouse key.
     *
     * @return {Exec}
     */
    mouseMiddleClick(): Exec;
    /**
     * Double-clicks with left mouse key.
     *
     * @return {Exec}
     */
    mouseDoubleLeftClick(): Exec;
    /**
     * Double-clicks with right mouse key.
     *
     * @return {Exec}
     */
    mouseDoubleRightClick(): Exec;
    /**
     * Double-clicks with middle mouse key.
     *
     * @return {Exec}
     */
    mouseDoubleMiddleClick(): Exec;
    /**
     * Toggles mouse down.
     *
     * @return {Exec}
     */
    mouseToggleDown(): Exec;
    /**
     * Toggles mouse up.
     *
     * @return {Exec}
     */
    mouseToggleUp(): Exec;
    /**
     * Press three keys like `CTRL+ALT+DEL`
     *
     * @param {MODIFIER_KEY} first_key - A modifier key
     * @param {MODIFIER_KEY} second_key - A modifier key
     * @param {PC_KEY} third_key - A key
     *
     * @return {Exec}
     */
    pressThreeKeys(first_key: MODIFIER_KEY, second_key: MODIFIER_KEY, third_key: PC_KEY): Exec;
    /**
     * Press two keys like `ALT+F4`
     *
     * @param {MODIFIER_KEY} first_key - A modifier key
     * @param {PC_KEY} second_key - A key
     *
     * @return {Exec}
     */
    pressTwoKeys(first_key: MODIFIER_KEY, second_key: PC_KEY): Exec;
    /**
     * Press one keys like `DEL`
     *
     * @param {PC_AND_MODIFIER_KEY} key - A key
     *
     * @return {Exec}
     */
    pressKey(key: PC_AND_MODIFIER_KEY): Exec;
    /**
     * Press three Android keys like `CTRL+ALT+DEL`
     *
     * @param {ANDROID_KEY} first_key - A Android key
     * @param {ANDROID_KEY} second_key - A Android key
     * @param {ANDROID_KEY} third_key - A Android key
     *
     * @return {Exec}
     */
    pressAndroidThirdKey(first_key: ANDROID_KEY, second_key: ANDROID_KEY, third_key: ANDROID_KEY): Exec;
    /**
     * Press two Android keys like `ALT+F4`
     *
     * @param {ANDROID_KEY} first_key - A Android key
     * @param {ANDROID_KEY} second_key - A Android key
     *
     * @return {Exec}
     */
    pressAndroidTwoKey(first_key: ANDROID_KEY, second_key: ANDROID_KEY): Exec;
    /**
     * Press one Android keys like `DEL`
     *
     * @param {ANDROID_KEY} key - A Android key
     *
     * @return {Exec}
     */
    pressAndroidKey(key: ANDROID_KEY): Exec;
    abstract exec(instruction: string, customElements: CustomElementJson[]): Promise<void>;
}
export {};
