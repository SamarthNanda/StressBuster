import "./count.css";

function countDays() {
    let today = new Date();
    let year = today.getFullYear();
    if(year === 2022){
        year++;
    }
    let examDate = new Date(year, 4, 28);
    console.log(examDate);
    var days = examDate - today;
    days = Math.floor(days / (1000 * 60 * 60 * 24));
    return days;
}

export default function Count() {
    return (
        <div className="count" >
            <h4>{countDays()}   </h4>
            <h3>{countDays()>1 ? "Days" : "Day"} left!</h3>
            <br />
            <h3>We Have The Right Amount Of Time To Make A Change!!</h3>
        </div>
    )
}