import React, {Component} from 'react';

class NewCourseForm extends Component{

    static defaultProps = {
        onSubmit: () => {}
    }
    constructor(props){
        super(props);

        this.state = {
            name: '',
            category: '',
            image: ''    
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const element = event.target
        const {value, name} = element

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const newCourse = this.state;

        if(newCourse.name && newCourse.image && newCourse.category){
            this.props.onSubmit(newCourse);
            this.setState({
                name: '',
                image: ''
            })
        }

    }
    
    render(){
        const {props, state} = this;
        return(
        <form className="course-form" onSubmit={this.handleSubmit} >
            <label>
                <span>Nome: </span>
                <input name="name" value={state.name} onChange={this.handleChange}/>
            </label>
            <label>
                <span>Categoria: </span>
                <select name="category" value={state.category} onChange={this.handleChange} >
                    <option value="">Selecionar</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="python">Python</option>
                    <option value="ruby">Ruby</option>
                </select>
            </label>
            <label>
                <span>Imagem: </span>
                <input type="text" name="image" value={state.image} onChange={this.handleChange} />
            </label>
            <button type="submit">Criar Curso</button>
        </form>
        );

    }

}

export default NewCourseForm;