import { LEFT, RIGHT } from './robot.const.js';
import { isValidPosition, isOnBoard } from '../board/board.js';
import { DIRECTIONS, NORTH, EAST, SOUTH, WEST } from '../board/board.const.js';

/**
 * Allows the robot to turn
 *
 * @param {array} positionArray
 * @param {string} dir enum either LEFT or RIGHT
 */
export function turn(positionArray, dir = LEFT) {
	if (!isOnBoard(positionArray)) {
		return false;
	}

	let newDir = positionArray[2];
	const dirIndex = DIRECTIONS.indexOf(positionArray[2]);

	if (dir === LEFT) {
		if (dirIndex === 0) {
			newDir = DIRECTIONS[DIRECTIONS.length - 1];
		} else {
			newDir = DIRECTIONS[dirIndex - 1];
		}
	}

	if (dir === RIGHT) {
		if (dirIndex === DIRECTIONS.length - 1) {
			newDir = DIRECTIONS[0];
		} else {
			newDir = DIRECTIONS[dirIndex + 1];
		}
	}

	return [positionArray[0], positionArray[1], newDir];
}

/**
 * Move robot if possible
 *
 * @param {array} positionArray
 */
export function move(positionArray) {
	if (!isOnBoard(positionArray)) {
		return false;
	}

	let movement;

	if (positionArray[2] === NORTH) {
		movement = [positionArray[0], positionArray[1] + 1, positionArray[2]];
	}

	if (positionArray[2] === EAST) {
		movement = [positionArray[0] + 1, positionArray[1], positionArray[2]];
	}

	if (positionArray[2] === SOUTH) {
		movement = [positionArray[0], positionArray[1] - 1, positionArray[2]];
	}

	if (positionArray[2] === WEST) {
		movement = [positionArray[0] - 1, positionArray[1], positionArray[2]];
	}

	if (isValidPosition(movement[0], movement[1])) {
		return movement;
	}

	return positionArray;
}

/**
 * Display position of robot
 *
 * @param {*} positionArray
 */
export function report(positionArray) {
	if (!isOnBoard(positionArray)) {
		return false;
    }

	console.log(positionArray);
	return positionArray;
}

/**
 * Shortcut function for left turn
 *
 * @param {*} positionArray
 */
export function left(positionArray) {
	return turn(positionArray);
}

/**
 * Shortcut function for right turn
 *
 * @param {*} positionArray
 */
export function right(positionArray) {
	return turn(positionArray, RIGHT);
}
