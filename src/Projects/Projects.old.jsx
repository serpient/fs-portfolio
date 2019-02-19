import * as React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projects } from '../utils/projects';
import { skillCreator } from '../utils/skillCreator';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currTypeIsEng: false,
        }
    }
    toggleProjectType = () => {
        this.setState({ currTypeIsEng: !this.state.currTypeIsEng });
    }
    render() {
        let { currTypeIsEng } = this.state;
        console.log(this.props.location);
        return (
            <React.Fragment>
                <nav className="sub-header">
                    <div onClick={() => {this.toggleProjectType()}} className={`project-switch ${currTypeIsEng && 'project-switch-active'}`}>
                        <div 
                            className={`project-type ${currTypeIsEng && 'project-type-active'}`}
                        >
                            Engineering
                        </div>
                    </div>
                    <div onClick={() => {this.toggleProjectType()}} className={`project-switch ${!currTypeIsEng && 'project-switch-active-design'}`}>
                        <div 
                            className={`project-type ${!currTypeIsEng && 'project-type-active'}`}
                        >
                            Design
                        </div>
                    </div>
                </nav>
                <main className="projects-container">
                    <div className="projects-container-title">Francesca Sadikin</div>
                    <div className="projects-container-subtext">
                        Front End Developer & UI/UX Designer
                    </div>
                    <section className="projects projects-border">
                        <ProjectCreator projects={projects} />
                    </section>
                </main>
            </React.Fragment>
            
        )
    }
}

export default Projects;

const ProjectCreator = ({ projects }) => {
    return Array.from(projects).map((project, index) => {
        project = project[1];
        return (
            <React.Fragment key={"project_" + index}>
                <div className="project-timeline-dot" />
                <div className="project-timeline-text">{project.date}</div>
                <div className="project">
                    <div className="project-info">
                        <div className="project-title">{project.name}</div>
                        <div className="project-tech">{skillCreator(project.tech)}</div>
                        <div className="project-description">{project.description}</div>
                        <div className='project-btns'>
                            <Link to={'/projects/' + project.name.replace(/ /g, '-')} className="btn-more">More Details</Link>
                            <Link to={project.liveLink} className="btn-more">Live Link</Link>
                            <Link to={project.githubLink} className="btn-more">GitHub Link</Link>
                        </div>
                    </div>
                    <img className="project-coverPhoto" src={project.coverPhoto} alt="coverPhoto" />
                </div>
            </React.Fragment>
        );
    })
}