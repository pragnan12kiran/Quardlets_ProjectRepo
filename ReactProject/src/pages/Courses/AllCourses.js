import React from 'react';
import './Courses.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link, Route, Routes } from 'react-router-dom';
import UserCourses from '../../components/UserCourses';

function AllCourses() {
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(null);
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:8080/api/courses');
            setList(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleEdit = async (e) => {
        e.preventDefault();
        const resp = await axios.put('http://localhost:8080/api/courses/' + selected.id, selected);
        if (resp.status == 200) {
            alert('course updated');
            fetchData();
            setSelected(null);
        } else {
            alert('Error while update')
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(selected)
    return (
        
                <div className="table-container">
                    <table>
                        <tbody>
                            {
                                list.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>
                                            <button onClick={() => setSelected(item)}>Start Learning</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    
                </div>
           

            /* <h1><center><i><b>All courses</b></i></center></h1>
                <table >
                    
                    <tbody>
                        {
                            list.map(item => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>
                                        <button onClick={() => setSelected(item)}>Start Learning</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table> */
            /* {
                    selected &&
                    <form onSubmit={handleEdit}>
                        <h3>Edit Course</h3>
                        <input type="text" placeholder="Enter Course"
                            value={selected.title} onChange={(e) => setSelected({ ...selected, title: e.target.value })} />
                        <button type="submit">Save Data</button>
                    </form>
                } */
        
        // </div>
        //       </div>

        //     </div>
        //     </div>
        //     


    );
}

export default AllCourses;
