import { useState } from "react";
import axios from "axios";
 
 
function UserCourses() {
    const [userCourse, setUserCourse] = useState([]);
    const fetchData = async () => {
            try {
                const resp = await axios.post('http://localhost:8080/api/students/id'+ userCourse.id,userCourse);
                setUserCourse(resp.data);
            } catch (error) {
                console.log(error);
            }
            console.log(setUserCourse);
        }
    return (
        <div>
            <table >
                   
                    <tbody>
                        {
                            userCourse.map(item => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
     );
}
 
export default UserCourses;