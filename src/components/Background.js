import icon_0 from '../images/calendar.png';
import icon_1 from '../images/clock.png';
import icon_2 from '../images/task.png';
import '../scss/home.scss';

export const Background = () => {
    return (
        <div className="background">
            {
                Array.from({ length: 250 }).map((el, i) => {
                    return (
                        <span className="icons" key={i}>
                            <img src={icon_0} height={25} width={25} className="icon" alt="icon" style={{

                                top: Math.floor(2500 * Math.random()) + "px",
                                left: Math.floor(2500 * Math.random()) + "px",
                                rotate: Math.floor(360 * Math.random()) + "deg",
                                opacity: 0.05,


                            }} />
                            <img src={icon_1} height={15} width={15} alt="icon" className="icon"
                                style={{
                                    top: Math.floor(2500 * Math.random()) + "px",
                                    left: Math.floor(4000 * Math.random()) + "px",
                                    rotate: Math.floor(360 * Math.random()) + "deg",
                                    opacity: 0.05,
                                }} />
                            <img src={icon_2} height={15} width={15} alt="icon" className="icon"
                                style={{

                                    top: Math.floor(2500 * Math.random()) + "px",
                                    left: Math.floor(4500 * Math.random()) + "px",
                                    opacity: 0.1,
                                }} />
                        </span>
                    )
                })
            }

        </div>
    )
}