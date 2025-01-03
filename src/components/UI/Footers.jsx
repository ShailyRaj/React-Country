import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

export const Footers = () => {
    // 'footerIcon' is an object that maps icon names to their corresponding JSX elements.
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />,
    }

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                    footerContact.map((currData, index) => {
                        const {icon, title, details} = currData;

                        return (
                            <div className="footer-contact" key={index}>
                                <div className="icon">{footerIcon[icon]}</div>
                                {/*  {footerIcon[icon]} dynamically renders the appropriate icon 
                                
                                    (based on the value of 'icon') from the 'footerIcon' object =>
                                    footerIcon["MdPlace"] will evaluate to <MdPlace />
                                    footerIcon["IoCallSharp"] will evaluate to <IoCallSharp />
                                */}

                                <div className="footer-contact-text">
                                    <p>{title}</p>
                                    <p>{details}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </footer>
    )
}