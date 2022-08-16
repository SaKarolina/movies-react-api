import "./card.scss";
import star from '../Images/star.svg';
import { Button } from "@mui/material";

const Card = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    votes
}) => {
    return (
        <li className="item-row" id={id}>
            {poster ? (<img className='img' src={`https://image.tmdb.org/t/p/w200${poster}`} alt="movie_img"></img>) : (<div className="filler-poster"></div>)}
            <div className='info'>
                <span className="title" style={{ fontWeight: '900', textAlign: 'center' }}>{title}</span>
                <span style={{ marginTop: "20px" }}>{date ? date.substring(0, 4) : '-'}</span>
                <div className="vote">
                    <img className='starImg' style={{ width: '20px', heigth: '20px' }} src={star} alt='star'></img>
                    <div>
                        <p style={{ fontWeight: '600'}}>{(vote_average || 0).toFixed(1)}/10</p>
                        <p style={{ fontSize: '10px', color: '#a4a4a4' }}>{votes} votes</p>
                    </div>
                </div>
                <span className="type">{media_type === "tv" ? `${media_type} series` : media_type}</span>
                <Button className="watchBtn" variant="outlined" color="success" size="small">Watch Trailer</Button>
            </div>
        </li>
    );
};

export default Card;