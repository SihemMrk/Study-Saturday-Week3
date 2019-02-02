import React from 'react'
import { Component } from 'react'
import axios from 'axios';

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            students: []
        }
    }
    async componentDidMount() {
        const allStudent = await axios.get('/student')
        this.setState({
            students: allStudent.data
        })
    }

    render() {
        return (
            <div id='students'>
                {
                    this.state.students.map(student => (
                        <div key={student.id}>
                            <p>{student.fullName}</p>
                        </div>
                    ))
                }
            </div>
        )
    }

}