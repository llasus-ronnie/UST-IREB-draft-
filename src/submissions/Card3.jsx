//css
import '../styles/submissions/card3.css';

export default function Card3(props) {
    return(
        <>
        <div className='card-3'>
            <div className='card-3-title'>
                <h1>{props.title}</h1>
            </div>
            <div className='card-3-content'>
                <p className="card-3-date">{props.date}</p>

                <span className="card-3-span"></span>

                {/* REC */}
                <p>
                    <span className="card-3-span-left"> Assigned REC:</span>
                    <span className="card-3-span-right"> {props.REC} </span>
                </p>


                <span className="card-3-span"></span>

                <p>
                    {/* Review Classification */}
                    <span className="card-3-span-left"> Review Classification:</span>
                    <span className="card-3-span-right card-3-status"> {props.status} </span>
                </p>

            </div>

            <div className="button-div">
            <button className="card-3-button">View</button>
            </div>
        </div>
        </>
    );
}