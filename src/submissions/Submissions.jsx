import { useState } from 'react';

//components
import Navbar from '../navbar/Navbar';
import Card3 from '../submissions/Card3';

//css
import '../styles/submissions/submissions.css';

export default function Submissions() {

    const [isListView, setIsListView] = useState(false);

    const toggleListView = () => {
        setIsListView(!isListView);
    };

    const [data, setData] = useState([
        { title: 'Research 1', date: '2022-01-01', rec: 'REC 1', status: 'Status 1' },
        { title: 'Research 2', date: '2022-01-02', rec: 'REC 2', status: 'Status 2' },
        // Add more items here...
    ]);
    return (
        <>
        <div className='navbar-div'>
            <Navbar />
        </div>

        <div className='submissions-title'>
            <h1>My Submissions</h1>
            <p>ⓘ Click a card to see further details of your submission.</p>

            <div className={`switch ${isListView ? 'list' : 'card'}`} onClick={toggleListView}>
                <span className='switch-line'></span>
                <span className='switch-line'></span>
                <span className='switch-line'></span>
            </div>
        </div>

        <div className='submissions-content'>

            <div className='submissions-card'>
            <div className='submissions-card-title'>
                <h1> Submissions List </h1>
            </div>

            {!isListView && <div className='submissions-card-content'> {/* Render this div only when isListView is false */}
            <Card3
                title ='UST IREB PORTAL'
                date = 'December 29, 2012'
                REC = 'UST IREB'
                status = 'Expedited'/>

                <Card3
                title ='UST IREB PORTAL'
                date = 'December 29, 2012'
                REC = 'UST IREB'
                status = 'Expedited'/>

                <Card3
                title ='UST IREB PORTAL'
                date = 'December 29, 2012'
                REC = 'UST IREB'
                status = 'Expedited'/>
            </div>}

            {isListView && <div className={`submissions-list ${isListView ? 'list' : 'card'}`}> {/* Render this div only when isListView is true */}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Research Title</th>
                                <th>Date of Application</th>
                                <th>Assigned REC</th>
                                <th>Review Classification</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.date}</td>
                                    <td>{item.rec}</td>
                                    <td className='card-3-status'>{item.status}</td>
                                    <td className=''><button className="card-3-button">View</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}

            </div>
        </div>
        </>
    );
    }