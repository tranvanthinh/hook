import { useState, useEffect } from 'react';
import './AddNewBlog.scss'
import axios from 'axios'

const AddNewBlog = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleOnChangeContent = (event) => {
        setContent(event.target.value)
    }
    const handleOnClickSubmit = () => {
        if (!title || !content) {
            alert("Vui lòng nhập thông tin!")
            return
        }
        setTitle('')
        setContent('')

        let data = {
            title: title,
            body: content,
            userId: 1,
        }

        axios.post(`https://jsonplaceholder.typicode.com/posts`, data).then(res => {
            if (res && res.data) {
                let newBlog = res.data
                props.handleAddNew(newBlog)
            }
        })
    }



    return (
        <div className="AddNewBlog">
            <label htmlFor="fname">Title:</label>
            <input type="text" value={title}
                placeholder="Your title.."
                onChange={(event) => handleOnChangeTitle(event)}
            />

            <label htmlFor="lname">Content:</label>
            <input type="text" value={content}
                placeholder="Your content.."
                onChange={(event) => handleOnChangeContent(event)}
            />

            <input type="submit"
                value="Submit"
                onClick={() => handleOnClickSubmit()}
            />
        </div>
    )
}

export default AddNewBlog;