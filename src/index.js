import { parseCommands } from './scenarios/parse-commands.js';
import { actions as robot1actions } from './scenarios/robot-1.js';
import { actions as robot2actions } from './scenarios/robot-2.js';
import { actions as robot3actions } from './scenarios/robot-3.js';
import { actions as robot4actions } from './scenarios/robot-4.js';

robot1actions.reduce((position, action) => parseCommands(position, action), false);
robot2actions.reduce((position, action) => parseCommands(position, action), false);
robot3actions.reduce((position, action) => parseCommands(position, action), false);
robot4actions.reduce((position, action) => parseCommands(position, action), false);
