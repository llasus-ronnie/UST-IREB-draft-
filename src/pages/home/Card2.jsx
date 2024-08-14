import '../../styles/home/card2.css'
export default function Card2(props) {
    return(
        <>
            <div className='card2'>
                <div className='yellow-line'></div>

                <div className='card2-content'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                </div>
            </div>
        </>
    )
}