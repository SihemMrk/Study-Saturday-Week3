import React, { Component } from 'react'
import axios from 'axios'
import SingleStudent from './SingleStudent';

export default class StudentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            tests: [],
            currentStudent: null
        }
    }
    async componentDidMount() {
        const students = await axios.get('/student')
        this.setState({ students: students.data })
    }
    clickDetailHandler(value) {
        this.setState({ currentStudent: value });
    }
    render() {
        return (
            <div>
                <h1>Students</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Test</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.fullName}</td>
                                    <td value={student} onClick={() => this.clickDetailHandler(student)}>Details</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <SingleStudent student={this.state.currentStudent} />
            </div>
        )
    }
}