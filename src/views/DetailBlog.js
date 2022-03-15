import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/Fetch";
import './Blog.scss';

const DetailBlog = () => {

    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogDetail, loading, errMessage }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    const handleBackBlog = () => {
        history.push('/blog')
    }

    return (
        <div>
            <div className="blog-detail">
                {dataBlogDetail &&
                    <>
                        <div className="title">
                            Blog id: {id} - {loading === true ? 'Loading...' : dataBlogDetail.title}
                        </div>
                        <div className="content">
                            {dataBlogDetail.body}
                        </div>
                    </>
                }
            </div>


            <button style={{ cursor: 'pointer', padding: '5px' }}
                onClick={() => handleBackBlog()}
            >
                Back
            </button>
        </div>
    )
}

export default DetailBlog;