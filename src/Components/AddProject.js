import React, { Component } from 'react';


class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'MobileDevelopment']
  }

  render() {
    let categoryOptions = this.props.categories.map(category=>{
      return <option key={category} value="category">{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form>
          <div>
          <label>Title: </label>
          <input type="text" ref="title" />
          </div>
          <div>
          <label>Category: </label>
          <select type="text" ref="category">
            {categoryOptions}
          </select>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
