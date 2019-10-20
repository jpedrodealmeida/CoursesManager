import React, {Component} from 'react';
import './main.css'
import Course from './course/Course';
import NewCourseForm from './course/NewCourseForm';

class MainComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            courses: []
        }
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
    }

    add(course){
        const {courses} = this.state;
        const newCourse = Object.assign({}, course, {id: (Date.now())}); //add 'id fild' on the course object 
        courses.push(newCourse);
        this.setState({courses});
    }

    remove(courseId){
        const {courses} = this.state;
        const courseIndex = courses.findIndex(course => course.id == courseId);

        courses.splice(courseIndex, 1);
        this.setState({courses});
    }
    render() {
        const {state} = this;
        const {remove} = this
        return(
            <div className="App">
                <NewCourseForm onSubmit={this.add} />
                <ul className="courses-list">
                    {
                        state.courses.map( course => <Course course={course} onRemove={remove} />)
                    }
                </ul>
            </div>
        );
    }
}

export default MainComponent;