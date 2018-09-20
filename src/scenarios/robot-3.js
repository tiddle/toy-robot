import {
	move as MOVE,
	left as LEFT,
	right as RIGHT,
	report as REPORT
} from '../robot/robot.js';

export const actions = [
	'PLACE 1,2,EAST',
	MOVE,
	MOVE,
	LEFT,
	MOVE,
	REPORT
];
