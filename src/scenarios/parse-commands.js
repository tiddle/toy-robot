import { place } from '../board/board.js';

export function parseCommands(position, action) {
	if (typeof action === 'string') {
		if (action.indexOf('PLACE') >= 0) {
			const coords = /PLACE (\d),(\d),([A-Z]+)/.exec(action);
			return place(parseInt(coords[1]), parseInt(coords[2]), coords[3]);
		}

		return false;
	}

	if (typeof action === 'function') {
		return action(position);
	}

	return false;
}
