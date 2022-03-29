import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';

function Content(){
    const[posts,setPosts] = useState([])

    const fetchData = async ()=>{
        const response = await axios.get("http://localhost:8000/about")
        if(response.data.sucess===true){
            console.log(response)
            setPosts(response.data.data)
        }
    }

    useEffect(()=>{
        fetchData()
    })

    return(
    <div>
        <div className="about-container">
            {posts&&posts.map(post =>(
            <div className="card-container"> 
                <Card className="cards" style ={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{post.abouttitle}</Card.Title>
                        
                        <Card.Text>{post.aboutdescription}</Card.Text>
                    </Card.Body>
                </Card>   
            </div>
            ))}
        </div>
</div>
    )
}
export default Content;