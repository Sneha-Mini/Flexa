import React, { useState, useEffect } from 'react';
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, Tooltip } from 'recharts';
import './Visualization.css';
import axios from 'axios';

const Visualization = () => {
    const [bmiData, setBmiData] = useState(null);
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(null);

    const [totalUsers, setTotalUsers] = useState(0);
    const [annualTarget, setAnnualTarget] = useState(0);
    const [Target, setTarget] = useState(0);
    const [progressPercentage, setProgressPercentage] = useState(0);
    
    useEffect(() => {
        axios.get('http://localhost:3000/totalusers')
            .then(response => {
                const total = response.data.length;
                setTotalUsers(total);
            })
            .catch(error => {
                console.error("Error fetching total users:", error);
            });
        const target = 50; 
        
        setAnnualTarget(target);
    }, []);
    useEffect(() => {
        const target = 50; 
        setTarget(target);
    }, []);
    useEffect(() => {
        if (annualTarget > 0) {
            const percentage = (totalUsers / annualTarget) * 100;
            setProgressPercentage(percentage.toFixed(0));
        }
    }, [totalUsers, annualTarget]);

    useEffect(() => {
        axios.get('http://localhost:3000/bmi')
            .then(response => {
                const data = [
                    { name: 'Underweight', value: response.data.underweight },
                    { name: 'Normal', value: response.data.normal },
                    { name: 'Overweight', value: response.data.overweight }
                ];
                setBmiData(data);
            })
            .catch(error => {
                console.error("Error fetching BMI data:", error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/usercountinmonths')
            .then(response => {
                console.log("User count response:", response.data);
                const { marcount, aprcount, maycount } = response.data;
                const data = [
                    { month: 'March', users: marcount },
                    { month: 'April', users: aprcount },
                    { month: 'May', users: maycount },
                ];
                setCount(data);
            })
            .catch(error => {
                console.error("Error fetching user count data:", error);
            });
    }, []);
    
   

    axios.get('http://localhost:3000/users')
    .then(response => {
        setUsers(response.data);
    })
    .catch(error => {
        console.error("Error fetching user data:", error);
    });

   

    return (
        <div className="visualization-container">
            <div className="visualization-left">
                <h2>BMI Distribution</h2>
                {bmiData && (
                    <PieChart width={400} height={300}>
                        <Pie data={bmiData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                )}
            </div>
            <div className="visualization-right">
                <h2>Monthly User Bar Chart</h2>
                    <BarChart width={600} height={400} data={count} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="users" fill="#8884d8" />
                    </BarChart>
            </div>
            <div className="visualization-left">
                <h2>Website Traffic</h2>
                <p >{totalUsers}</p>
                <p>{progressPercentage}% of annual target &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {Target}</p>
                <div style={{ width: '300px', backgroundColor: '#ccc', height: '20px' }}>
                    <div style={{ width: `${progressPercentage}%`, backgroundColor: '#8884d8', height: '100%' }}></div>
                </div>
            </div>
            <div className="visualization-matrix">
                <h2>User List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>BMI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.bmi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Visualization;
