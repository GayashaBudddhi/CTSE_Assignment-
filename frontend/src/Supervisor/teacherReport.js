import React, {Component} from 'react';
import axios from "axios";

class TeacherReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/material/')
            .then(response => {
                this.setState({teacher : response.data.data})
            } )
    }

    render() {
        return (
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="mb-3 table-secondary" colspan="3"><span className="text-success">APPROVED PRODUCTS</span></th>
                </tr>
                </thead>
                <tbody>
                <th>Product Category</th>
                <th>Product Code</th>
                <th>Items Count</th>
                {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                    <tr key={index} className="align-top">
                        {item.status === "approved" &&
                        <td>{item.subjectName}</td>
                        }
                        {item.status === "approved" &&
                        <td>{item.subjectCode}</td>
                        }
                        {item.status === "approved" &&
                        <td>{item.lesson}</td>
                        }
                    </tr>
                ))}
                </tbody>
                <thead>
                <tr>
                    <th className="mb-3 table-secondary" colspan="3"><span className="text-success">PENDING PRODUCTS</span></th>
                </tr>
                </thead>
                <tbody>
                <th>Product Category</th>
                <th>Product Code</th>
                <th>Items Count</th>
                {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                    <tr key={index} className="align-top">
                        {item.status === "not approved" &&
                        <td>{item.subjectName}</td>
                        }
                        {item.status === "not approved" &&
                        <td>{item.subjectCode}</td>
                        }
                        {item.status === "not approved" &&
                        <td>{item.lesson}</td>
                        }
                    </tr>
                ))}
                </tbody>
                <thead>
                <tr>
                    <th className="mb-3 table-secondary" colSpan="3"><span
                        className="text-success">Total Count of Recently Added Products</span></th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-success">
                    <th><span className="text-dark">No of Products</span></th>
                    <th><span className="text-primary">Approved Items</span></th>
                    <th><span className="text-primary">1</span></th>
                </tr>
                <tr className="table-success">
                    <th><span className="text-dark">No of Products</span></th>
                    <th><span className="text-primary">Pending Items</span></th>
                    <th><span className="text-primary">6</span></th>
                </tr>
                <tr className="table-success">
                    <th><span className="text-dark">Total No of Products</span></th>
                    <th><span className="text-primary">All Items</span></th>
                    <th><span className="text-primary">7</span></th>
                </tr>
                </tbody>
            </table>

        )
    }
}

export default TeacherReport;


