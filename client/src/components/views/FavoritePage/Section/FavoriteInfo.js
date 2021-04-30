import React from 'react'
import "./FavoriteInfo.css";

function FavoriteInfo(props) {

    const onClickDelete = () => {
        props.onClickFavoriteDelete(props.movieId,props.userId);
    }

    return (
        <div className="favorite_info">
            <div className="favorite_info_poster"><img src={props.image}/></div>
            {/* 포스터 */}
            <div className="favorite_info_text">
                <div><h1>{props.title}</h1></div>
                <div><h5>출시날짜</h5></div>
                <div><h5>종합 평가</h5></div>
                <div><ul></ul></div>
                <button onClick={onClickDelete}>취소</button>
            </div>
            {/* 장르 */}
        </div>
    )
}

export default FavoriteInfo
