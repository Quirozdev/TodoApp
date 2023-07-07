import './public/style.css';
import db from './db';
import eventsHandler from './eventsHandler';
import DOMHandler from './domHandler';

eventsHandler.initializeCustomEvents();

DOMHandler.displayProjects(db.getAllProjects());