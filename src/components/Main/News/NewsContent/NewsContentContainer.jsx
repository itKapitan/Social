import {connect} from "react-redux";
import NewsContent from "./NewsContent";


let mapStateToProps = (state) => {
    return{
        news: state.FeedPage.news,
    }
}

const NewsContentContainer = connect(mapStateToProps)(NewsContent)
export default NewsContentContainer