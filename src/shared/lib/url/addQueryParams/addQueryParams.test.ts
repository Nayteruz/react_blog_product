import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2',
            test3: 'value3',
        });
        expect(params).toBe('?test=value&test2=value2&test3=value3');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
    test('test with null params', () => {
        const params = getQueryParams({});
        expect(params).toBe('?');
    });
});
