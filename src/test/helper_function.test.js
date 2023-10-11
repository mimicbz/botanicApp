import {expect, test} from 'vitest'
import{ helper_function } from '@/helpers/helper_function';

test('test helper function', () => {
    expect(helper_function(1)).toBe(2)
})

test('test helper function', () => {
    expect(helper_function(5)).toBe(6)
})