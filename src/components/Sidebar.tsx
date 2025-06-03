import React from 'react'
import navBackground from '../assets/background-images/nav_background.png';
import homeIcon from '../assets/icons/nav/home-nav.svg';
import statsIcon from '../assets/icons/nav/stats-nav.svg';
import calendarIcon from '../assets/icons/nav/calendar-nav.svg';
import inboxIcon from '../assets/icons/nav/inbox-nav.svg';
import taskIcon from '../assets/icons/nav/tasks-nav.svg';
import expandIcon from '../assets/icons/nav/expand-nav.svg';

export default function Sidebar() {

    const [isExpanded, setIsExpanded] = React.useState(false);

    function handleExpand(){

        setIsExpanded(

            (prev) => !prev

        )
        console.log(`Clicked!, ${isExpanded}`);
        console.log();
        

    }


    return(

        <nav className={`side-bar ${isExpanded ? 'side-bar--expanded' : 'side-bar--collapsed'}`}
            style={{ backgroundImage: `url(${navBackground})` }}>

                <ul className="side-bar__options">

                        <li className="side-bar__options__element side-bar__options__element--logo">Logo</li>
                        <li className="side-bar__options__element side-bar__options__element--home">
                            
                                <img src={homeIcon} alt="Home" className="side-bar__icon" />
                              {isExpanded && <span className="label">Home</span>}
                        </li>

                        <li className="side-bar__options__element side-bar__options__element--tasks">


                                <img src={taskIcon} alt="Home" className="side-bar__icon" />
                              {isExpanded && <span className="label">Tasks</span>}

                        </li>
                        <li className="side-bar__options__element side-bar__options__element--stats">

                                <img src={statsIcon} alt="Home" className="side-bar__icon" />
                              {isExpanded && <span className="label">Stats</span>}

                        </li>
                        <li className="side-bar__options__element side-bar__options__element--calendar">

                                <img src={calendarIcon} alt="Home" className="side-bar__icon" />
                              {isExpanded && <span className="label">Calendar</span>}

                        </li>
                        <li className="side-bar__options__element side-bar__options__element--inbox">

                                <img src={inboxIcon} alt="Home" className="side-bar__icon" />
                              {isExpanded && <span className="label">Inbox</span>}
                        </li>
                        <li className="side-bar__options__element side-bar__options__element--expand" onClick={handleExpand}>

                                <img
                                    src={expandIcon}
                                    alt="Home"
                                    className={`side-bar__icon ${isExpanded ? "side-bar__icon--expand" : "side-bar__icon--collapse"}`}
                                />
                        </li>

                </ul>

           


        </nav>

    )


}