import './cosmetic.css';
import items from './cosmetic_data/response'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Cosmetic() {
    let {colorid} = useParams();

    const List = items.results.filter(result => result.color == colorid);
    
    return(
        <>
        <h3 className="cosmetic_title">화장품 추천 리스트</h3>
        <div className="cosmetic_container">
            {List.map((item)=>(
                <a href={`${item.url}`} target="_blank" className="item_href">
                    <img src={`${item.image}`}></img>
                    <div key={item.id} className="cosmetic_item">{item.name}</div>
                </a>
            ))}
        </div>   
        </>
    );
}

export default Cosmetic