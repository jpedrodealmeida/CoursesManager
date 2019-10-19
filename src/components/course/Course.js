import React, {Component} from 'react';

class Course extends Component{
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
    }
  
    static defaultProps = {
        course: {},
        onRemove: () => {}
    }
    remove(){
        this.props.onRemove(this.props.course.id)
    }
    render(){
        const {remove} = this
        const {props} = this,
            {course} = props;
        return(
            <li className="course">
                <div>{course.category}</div>
                <button onClick={this.remove}>X</button>
                <img src={course.image} />
                <div>{course.name}</div>
            </li>
        );
    }
};

export default Course;