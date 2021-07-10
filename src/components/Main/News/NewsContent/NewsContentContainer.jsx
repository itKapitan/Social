import {connect} from "react-redux";
import NewsContent from "./NewsContent";


let mapStateToProps = (state) => {
    return{
        news: state.FeedPage.news,
    }
}

export default connect(mapStateToProps)(NewsContent)
