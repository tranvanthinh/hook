import { useState, useEffect } from 'react';
import useFetch from "../customize/Fetch";
import './Blog.scss'
import { Link, NavLink } from 'react-router-dom'
import { useParams, useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddNewBlog from './AddNewBlog'

const Blog = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let history = useHistory();

    const { data: dataBlog, loading, errMessage }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)

    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let data = dataBlog.slice(0, 12)
            setNewData(data)

        }
    }, [dataBlog])
    const handleAddNew = (blog) => {
        let data = newData
        data.unshift(blog)

        setShow(false)
        setNewData(data)
    }

    const deletePost = (id) => {
        let data = newData
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }
    return (
        <>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    + Add new blog
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD New Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog handleAddNew={handleAddNew} />
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </div>


            <div className="btn-blog my-2" onClick={handleAddNew}>

            </div>
            <div className="blogs-container">
                {loading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                {item.title}
                                <button className="close" onClick={() => window.confirm("Do you want to delete?") ? deletePost(item.id) : []}>x</button>
                            </div>
                            <div className="content">{item.body}</div>
                            <button className="btn">
                                <Link to={`/blog/${item.id}`}>Views Detail</Link>
                            </button>
                        </div>

                    )

                })}

                {loading === true &&
                    <div style={{ textAlign: 'center' }}>Loading...</div>
                }
            </div>
        </>
    )
}

export default Blog;
