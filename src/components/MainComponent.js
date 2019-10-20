import React, {Component} from 'react';
import './main.css'
import Course from './course/Course';
import NewCourseForm from './course/NewCourseForm';

class MainComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            courses: [
                {
                    id: 1,
                    name: 'React',
                    category: 'JavaScript',
                    image: 'https://i0.wp.com/storage.googleapis.com/blog-images-backup/1*3SVfBkNZI2f-sspiq59xcw.png?resize=391%2C321&ssl=1'
                },
                {
                    id: 2,
                    name: 'Angular',
                    category: 'JavaScript',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MVpIGFzfjAAwoiVLfHO3XBZzBV2u1Uzy1zWs40RutcCTNTW2&s'
                }
            ]
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