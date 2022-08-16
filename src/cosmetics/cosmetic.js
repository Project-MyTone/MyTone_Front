import './cosmetic.css';

const items = [
    {
        id:1,
        name:"rkskekfk",
        price:1000,
    },
    {
        id:2,
        name:"dfadfdfd",
        price:2000,
    },
    {
        id:3,
        name:"hello",
        price:5000,
    },
    {
        id:4,
        name:"hellozz",
        price:4500,
    },
    {
        id:5,
        name:"hellozz",
        price:4500,
    },
    {
        id:6,
        name:"hellozz",
        price:4500,
    },
    {
        id:7,
        name:"hellozz",
        price:4500,
    },
]

function cosmetic() {
    return(
        <>
        <h3 className="cosmetic_title">화장품 추천 리스트</h3>
        <div className="cosmetic_container">
            {items.map((item)=>(
                <div key={item.id} className="cosmetic_item">{item.name}
                <h3>{item.price}</h3>
                </div>
            ))}
        </div>   
        </>
    );
}

export default cosmetic