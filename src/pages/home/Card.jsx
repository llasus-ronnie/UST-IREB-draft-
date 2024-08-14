import '../../styles/home/card.css'

export default function Card(props) {
    return(
        <>
        <div className="card">
            <div className="card-content">

                <div className='image'>
                <img src={props.image} alt={props.alt} />
                </div>

                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button> Go Here &gt; </button>
            </div>
        </div>
        </>
    )
}