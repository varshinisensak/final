import "./style.css";

const About = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages:</strong>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                </div>
                <div>
                    <strong>Libraries:</strong>
                    <li>Bootstrap</li>
                    <li>antd.ui</li>
                    <li>Material-ui</li>
                    <li>React.js</li>
                </div>
                <div>
                    <strong>Tools:</strong>
                    <li>Eslint</li>
                    <li>Webpack</li>
                    <li>Chrome Dev</li>
                    <li>Github</li>
                </div>
                
            </div>
        </div>
    );
};

export default About;