import { BOARD_X, BOARD_Y, DIRECTIONS } from './board.const.js';

/**
 * Check if robot is on the board
 *
 * @param {Object} robot
 */
export function isOnBoard(position) {
	if (
		position &&
		position.length >= 2 &&
		isValidPosition(position[0], position[1])
	) {
		return true;
	}
}

/**
 * Check is position is valid
 *
 * @param {int} x
 * @param {int} y
 */
export function isValidPosition(x = -1, y = -1) {
	if (x > BOARD_X || x < 0) {
		return false;
	}

	if (y > BOARD_Y || y < 0) {
		return false;
	}

	if (typeof x !== 'number') {
		return false;
	}

	if (typeof y !== 'number') {
		return false;
	}

	return true;
}

/**
 * Check if direction is valid
 *
 * @param {string} dir
 */
export function isValidDirection(dir) {
	if (DIRECTIONS.indexOf(dir) >= 0) {
		return dir;
	}

	return false;
}

/**
 * Place robot onto table
 *
 * @param {int} x
 * @param {int} y
 * @param {string} dir enum from DIRECTIONS
 */
export function place(x = 0, y = 0, dir = DIRECTIONS[0]) {
	if (isValidPosition(x, y) && isValidDirection(dir)) {
		return [x, y, dir];
	}

	return false;
}
