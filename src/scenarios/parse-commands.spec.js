import { parseCommands } from './parse-commands.js';

describe('parseCommands', function() {
	it('should parse commands properly', function() {
		const mockFunc = jest.fn();

		expect(parseCommands([], 'PLACE 0,0,EAST')).toEqual([0, 0, 'EAST']);
		expect(parseCommands([], 'invalid text')).toBeFalsy();
		expect(parseCommands([], {})).toBeFalsy();

		parseCommands([], mockFunc);
		expect(mockFunc.mock.calls.length).toBe(1);
	});
});
