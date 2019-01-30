import * as React from 'react';
import '../ProjectPageStyling/ProjectDetail.css';
import { projects } from '../utils/projects';
import { individualProjectPageCreator } from '../utils/individualProjectPageCreator';

var turtleTabData = projects.get('turtle-tab');

class TurtleTab extends React.Component {
    render() {
        return (individualProjectPageCreator(turtleTabData, "turtleTab-main.png"))
    }
}

export default TurtleTab;