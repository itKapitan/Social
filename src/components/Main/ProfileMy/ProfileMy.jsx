
import ProfileHeader from './ProfileHeader/ProfileHeader'
import PostAddContainer from "./PostAdd/PostAddContainer";
import PostItemContainer from "./PostItem/PostItemContainer";


export default function ProfileMy(props) {

    return (
        <>
            <ProfileHeader/>
            <PostAddContainer store={props.store}/>
            <PostItemContainer store={props.store}/>
        </>
    )

}
