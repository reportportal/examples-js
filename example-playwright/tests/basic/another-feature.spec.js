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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
var agent_js_playwright_1 = require("@reportportal/agent-js-playwright");
var suiteName = 'More checks related to Playwright website. It should';
test_1.test.describe(suiteName, function () {
    test_1.test.describe.configure({ mode: 'serial', retries: 2 }); // use 'serial' mode and retries for this suite
    agent_js_playwright_1.ReportingApi.addAttributes([
        {
            key: 'component',
            value: 'website',
        },
        {
            key: 'feature',
            value: 'title',
        },
        {
            key: 'feature',
            value: 'get-started',
        },
        {
            value: 'demo',
        },
    ], suiteName);
    agent_js_playwright_1.ReportingApi.setDescription('This suite contains several tests that performs some checks with the **Playwright** website main page.', suiteName);
    (0, test_1.test)('has the correct title', function (_a) {
        var page = _a.page, browserName = _a.browserName;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        agent_js_playwright_1.ReportingApi.addAttributes([
                            {
                                key: 'browser',
                                value: browserName,
                            },
                            {
                                value: 'demo',
                            },
                        ]);
                        agent_js_playwright_1.ReportingApi.setDescription("The test name is self-descriptive, but do not hesitate to provide additional *info* about the test,\n      e.g. some important notes from the **Test Case Management system**, special conditions, etc.\n    ");
                        return [4 /*yield*/, page.goto('https://playwright.dev/')];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, test_1.test.step('step. Have "Playwright" title', function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (0, test_1.expect)(page).toHaveTitle(/Playwright/)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page).toHaveTitle(/Playwright/)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    (0, test_1.test)('redirect to "intro" page after clicking on get started link', function (_a, testInfo) {
        var page = _a.page, browserName = _a.browserName;
        return __awaiter(void 0, void 0, void 0, function () {
            var expectedUrl, screenshot;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        agent_js_playwright_1.ReportingApi.addAttributes([
                            {
                                key: 'browser',
                                value: browserName,
                            },
                            {
                                value: 'demo',
                            },
                        ]);
                        agent_js_playwright_1.ReportingApi.setDescription("The test name is self-descriptive, but do not hesitate to provide additional *info* about the test,\n      e.g. some important notes from the **Test Case Management system**, special conditions, etc.\n    ");
                        console.log('The *"Get started"* link will be clicked.');
                        return [4 /*yield*/, page.goto('https://playwright.dev/')];
                    case 1:
                        _b.sent();
                        expectedUrl = /.*intrO/;
                        if (testInfo.retry > 1) {
                            expectedUrl = /.*intro/;
                        }
                        return [4 /*yield*/, page.screenshot()];
                    case 2:
                        screenshot = _b.sent();
                        return [4 /*yield*/, testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, page.getByRole('link', { name: 'Get started' }).click()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL(expectedUrl)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    (0, test_1.test)('should be passed when previous tests passed', function (_a) {
        var page = _a.page;
        return __awaiter(void 0, void 0, void 0, function () {
            var title;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, page.goto('https://playwright.dev/')];
                    case 1:
                        _b.sent();
                        title = page.locator('.navbar__inner .navbar__title');
                        return [4 /*yield*/, (0, test_1.expect)(title).toHaveText('Playwright')];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
});
test_1.test.describe('Checks with "toPass" timeouts', function () {
    (0, test_1.test)("Expect pool @desktop", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_1.expect
                        .poll(function () {
                        return 1;
                    }, { timeout: 30000 })
                        .toBe(2)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)('Expect toPass @desktop', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, test_1.expect)(function () {
                        (0, test_1.expect)(1).toBe(2);
                    }).toPass({ timeout: 30000 })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
