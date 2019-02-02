import React, { Component } from 'react'
import axios from 'axios'

export default class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: this.props.student,
            test: {
                subject: '',
                grade: ''
            }
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ student: props.student });
    }
    async componentDidMount() {
        const test = await axios.get('/test')
        const allTest = test.data
        const student = await axios.get('student')
        const allStudent = student.data
        //this.setState({ student: allStudent, test: allTest })
    }
    render() {
        if (!this.state.student) {
            return ('')
        }
        return (
            <div>
                <p>SingleStudent : {this.state.student.fullName}</p>
            </div>
        )


    }
}