import React from 'react'
import "../css/profilepost.scss";

function ProfilePost(props) {
    const {
        id,
        caption,
        username,
        storyBorder,
        image,
        likedByText,
        likedByNumber,
        hours,
        CommentCount
    } = props;
    return (
        <div className="my-3">
            <div class="gallery-item" tabindex="0">

                <img src={image} alt="" />

                    <div class="gallery-item-type">
 
                        <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

                    </div>

                    <div class="gallery-item-info">

                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
                            <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i>{CommentCount}</li>
                        </ul>

                    </div>

            </div>
        </div>
    )
}

export default ProfilePost
