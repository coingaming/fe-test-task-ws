

//import { useEffect, useState, useRef } from "react";
import "../App.css"
import { FaTrash } from "react-icons/fa";
//import ReactTable from "react-table"

//const socket = io.connect("http://localhost:3050");

function LeaderBoard({theArray, setTheArray, userid, selectValue}) {

    const handleDelete = (id) => {
        const newArray = theArray.filter(li => li.userId !== id);
        setTheArray(newArray);
    }

    //const effectRan = useRef(false);
    //const [theArray, setTheArray] = useState([]);
    //const [userid, setuserid] = useState();

    
    return (
        <div className="Box">
            <table className="User">
                <thead>
                <tr>
                    <th> </th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {theArray && theArray
                    .sort((a, b) => b.score - a.score)
                    .slice(0,selectValue)
                    .map(item => {
                        return (
                            <tr className={userid === item.userId ? 'highlight' : 'nonhighlight' } key ={item.userId}>
                                <td><img src={item.avatar} alt="" width="50" height="50" /></td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.score}</td>
                                <td><button onClick={() => handleDelete(item.userId)}><FaTrash style={{color: "blue"}}/></button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LeaderBoard;