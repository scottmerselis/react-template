import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(id){
    //console.log('test');
    this.props.onDelete(id);
  }

  render() {
    console.log(this.props);
    return (
      <li className="Projects">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
      </li>
    );
  }
}

export default ProjectItem;
