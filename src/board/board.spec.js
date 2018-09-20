import {
	isOnBoard,
	isValidPosition,
	isValidDirection,
	place
} from './board.js';
import { EAST, DIRECTIONS } from './board.const.js';

describe('isOnBoard', function() {
	it('should return false if robot is NOT on the board', function() {
		const robot = [];
		expect(isOnBoard(robot)).toBeFalsy();
		expect(isOnBoard(false)).toBeFalsy();
	});

	it('should return true if robot IS on the baord', function() {
		const robot = [0, 1, EAST];
		expect(isOnBoard(robot)).toBeTruthy();
	});
});

describe('isValidPosition', function() {
	it('should return false if position is INVALID', function() {
		expect(isValidPosition()).toBeFalsy();
		expect(isValidPosition('aa', 'b')).toBeFalsy();
		expect(isValidPosition(10, 10)).toBeFalsy();
	});
});

describe('isValidDirection', function() {
	it('should return false if direction is INVALID', function() {
		expect(isValidDirection()).toBeFalsy();
		expect(isValidDirection('invalid direction')).toBeFalsy();
	});

	it('should return false if direction is VALID', function() {
		expect(isValidDirection(EAST)).toBeTruthy();
		expect(isValidDirection('NORTH')).toBeTruthy();
		expect(isValidDirection(DIRECTIONS[0])).toBeTruthy();
	});
});

describe('place', function() {
	it('should return false if placement position is INVALID', function() {
		expect(place('aa', 'bb')).toBeFalsy();
		expect(place(-7, 0)).toBeFalsy();
		expect(place(0, 'aa')).toBeFalsy();
		expect(place()).toEqual([0, 0, 'NORTH']);
	});
});
