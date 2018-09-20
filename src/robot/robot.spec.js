import { turn, move, report, left, right } from './robot.js';
import { LEFT, RIGHT } from './robot.const.js';
import { DIRECTIONS, NORTH, EAST, SOUTH, WEST } from '../board/board.const.js';

describe('turn', function() {
	it('should return the correct direction when turning left', function() {
		expect(turn([0, 0, DIRECTIONS[0]])).toEqual([0, 0, WEST]);
		expect(turn([0, 0, DIRECTIONS[1]])).toEqual([0, 0, NORTH]);
		expect(turn([0, 0, DIRECTIONS[2]])).toEqual([0, 0, EAST]);
		expect(turn([0, 0, DIRECTIONS[3]])).toEqual([0, 0, SOUTH]);
		expect(turn([0, 0, DIRECTIONS[3], LEFT])).toEqual([0, 0, SOUTH]);
	});

	it('should return the correct direction when turning right', function() {
		expect(turn([0, 0, DIRECTIONS[0]], RIGHT)).toEqual([0, 0, EAST]);
		expect(turn([0, 0, DIRECTIONS[1]], RIGHT)).toEqual([0, 0, SOUTH]);
		expect(turn([0, 0, DIRECTIONS[2]], RIGHT)).toEqual([0, 0, WEST]);
		expect(turn([0, 0, DIRECTIONS[3]], RIGHT)).toEqual([0, 0, NORTH]);
	});

	it('should return false if robot is not on the board', function() {
		expect(turn([])).toBeFalsy();
	});
});

describe('move', function() {
	it('should only move if robot ends up in a valid location', function() {
		expect(move([5, 5, DIRECTIONS[0]])).toEqual([5, 5, DIRECTIONS[0]]);
		expect(move([0, 5, DIRECTIONS[0]])).toEqual([0, 5, DIRECTIONS[0]]);
		expect(move([0, 0, DIRECTIONS[0]])).toEqual([0, 1, DIRECTIONS[0]]);
		expect(move([0, 2, DIRECTIONS[0]])).toEqual([0, 3, DIRECTIONS[0]]);

		expect(move([5, 5, DIRECTIONS[1]])).toEqual([5, 5, DIRECTIONS[1]]);
		expect(move([0, 5, DIRECTIONS[1]])).toEqual([1, 5, DIRECTIONS[1]]);
		expect(move([0, 0, DIRECTIONS[1]])).toEqual([1, 0, DIRECTIONS[1]]);
		expect(move([2, 2, DIRECTIONS[1]])).toEqual([3, 2, DIRECTIONS[1]]);

		expect(move([5, 5, DIRECTIONS[2]])).toEqual([5, 4, DIRECTIONS[2]]);
		expect(move([5, 0, DIRECTIONS[2]])).toEqual([5, 0, DIRECTIONS[2]]);
		expect(move([0, 0, DIRECTIONS[2]])).toEqual([0, 0, DIRECTIONS[2]]);
		expect(move([2, 2, DIRECTIONS[2]])).toEqual([2, 1, DIRECTIONS[2]]);

		expect(move([5, 5, DIRECTIONS[3]])).toEqual([4, 5, DIRECTIONS[3]]);
		expect(move([0, 5, DIRECTIONS[3]])).toEqual([0, 5, DIRECTIONS[3]]);
		expect(move([0, 0, DIRECTIONS[3]])).toEqual([0, 0, DIRECTIONS[3]]);
		expect(move([2, 2, DIRECTIONS[3]])).toEqual([1, 2, DIRECTIONS[3]]);
	});

	it('should return false if robot is not on the board', function() {
		expect(move([])).toBeFalsy();
	});
});

describe('report', function() {
	it('should only output coords if on the board', function() {
		expect(report([])).toBeFalsy();
		expect(report([0, 0, 'NORTH'])).toEqual([0, 0, 'NORTH']);
	});
});

describe('left', function() {
	it('should turn left', function() {
		expect(left([0, 0, 'NORTH'])).toEqual([0, 0, 'WEST']);
	});
});

describe('right', function() {
	it('should turn right', function() {
		expect(right([0, 0, 'NORTH'])).toEqual([0, 0, 'EAST']);
	});
});
