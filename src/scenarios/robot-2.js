import {
	move as MOVE,
	left as LEFT,
	right as RIGHT,
	report as REPORT
} from '../robot/robot.js';

export const actions = [
	LEFT,
	RIGHT,
	MOVE,
	'PLACE 0,0,NORTH',
	LEFT,
	REPORT
];
