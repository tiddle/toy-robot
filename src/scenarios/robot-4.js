import {
	move as MOVE,
	left as LEFT,
	right as RIGHT,
	report as REPORT
} from '../robot/robot.js';

export const actions = [
	MOVE,
	'INVALID TEXT',
	MOVE,
	RIGHT,
	'PLACE 0,0,NORTH',
	MOVE,
	MOVE,
	LEFT,
	MOVE,
	MOVE,
	RIGHT,
	RIGHT,
	MOVE,
	MOVE,
	REPORT
];
