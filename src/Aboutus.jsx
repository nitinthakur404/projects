import React from 'react'
import team from '../src/img/team.jpg'
import '../src/Aboutuscss.css'
import ComputerIcon from '@material-ui/icons/Computer';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import CenterFocusWeakSharpIcon from '@material-ui/icons/CenterFocusWeakSharp';
import FingerprintSharpIcon from '@material-ui/icons/FingerprintSharp';
import Ourprocesscard from '../src/Ourprocesscard';
// import Servicecompo from '../src/menu/Servicecompo'

function Aboutus() {
    return (
        <>
            <div className="Aboutus">
                <div className="tagline">
                    <p>We are EB Pearls</p>
                </div>
                <div className="tagline_para">
                    <p>A hybrid Business Model with a holistic approach to online business
                    <br></br> Web eCommerce Mobile App Development.</p>
                </div>
                <div className="Enquire">
                    <button>ENQUIRE</button>
                </div>

                <div className="img_team">
                    <p className="first_para">Beauty happens with code not by chance.<br></br>we emplay creative tools code and solid online<br></br> branding knowledge to build an elegant<br></br> solutions for our clients</p>
                    <div className="second_para">
                        <p>We,re Fundamental technology people As part of EB Perals we're laying the<br></br>groundwork for web and mobile development innovations through laser<br></br> focused solutions</p>
                    </div>
                    <img src={team} alt="teamimage "></img>
                    <div className="OurTeam">
                        <button>MEET OUR TEAM</button>
                    </div>
                </div>


                {/* About page second start */}
                <div className="About_second">
                    <div className="our_process">
                        <p>Our Process</p>
                    </div>
                    <div className="About_Second_para">
                        <p>Think About EB pearls as your personal Incubator of creating. We take your idea and turn bring you Revenue<br></br> generating Results</p>
                    </div>

                    <div className="ourcard">
                        <Ourprocesscard
                            icon={<ComputerIcon />}
                            firsttag="Project Initiation"
                            firstli="Requirement gathering"
                            secondli="proposal"
                            thirdli="project Plan"
                            fourthli="Solution page"
                        />
                        <Ourprocesscard
                            icon={<ImportExportIcon />}
                            firsttag="Desgin"
                            firstli="Concept/Inspiration"
                            secondli="Branding"
                            thirdli="Design/Style guide"
                            fourthli="Storyboarding"
                        />
                        <Ourprocesscard
                            icon={<CenterFocusWeakSharpIcon />}
                            firsttag="Development"
                            firstli="Frontend Development"
                            secondli="Frontend integration"
                            thirdli="Backend Development"
                            fourthli="Quality Assurance"
                        />
                        <Ourprocesscard
                            icon={<FingerprintSharpIcon />}
                            firsttag="Security scans"
                            firstli="Timely Support"
                            secondli="Support"
                            thirdli="proposal"
                            fourthli="project Plan"
                        />
                    </div>
                    <button className="learn-more">Learn More</button>
                </div>
            </div>

        </>
    )
}

export default Aboutus;