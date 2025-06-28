import { useState, useEffect } from 'react';
import './Officers.css'

const Officers = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const officers = [
        {
            position: "President",
            name: "Mason Bindemann",
            icon: "👑",
            description: "Leads the organization and oversees all activities"
        },
        {
            position: "Vice President", 
            name: "Nolan Freyhof",
            icon: "🎯",
            description: "Assists the president and manages operations"
        },
        {
            position: "Treasurer",
            name: "Samuel Langer", 
            icon: "💰",
            description: "Manages finances and budget planning"
        },
        {
            position: "Website Officer",
            name: "Naveen Kamath",
            icon: "💻", 
            description: "Maintains our online presence and digital platforms"
        },
        {
            position: "Community Officer",
            name: "Lance Bance",
            icon: "🤝",
            description: "Fosters community engagement and member relations"
        },
        {
            position: "Tech Officer", 
            name: "Roshan Robinson",
            icon: "⚡",
            description: "Handles technical setup and equipment management"
        },
        {
            position: "Advisor",
            name: "Jesse Schotter",
            icon: "🎓",
            description: "Provides guidance and institutional support"
        }
    ];

    return (
        <div className="officers-section">
            <div className="officers-container">
                <h1 className="officers-title">Our Leadership Team</h1>
                <p className="officers-subtitle">Meet the dedicated officers who make Lanarchy possible</p>
                
                <div className="officers-grid">
                    {officers.map((officer, index) => (
                        <div key={index} className="officer-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="officer-icon">{officer.icon}</div>
                            <div className="officer-info">
                                <h3 className="officer-position">{officer.position}</h3>
                                <h4 className="officer-name">{officer.name}</h4>
                                <p className="officer-description">{officer.description}</p>
                            </div>
                            <div className="officer-card-bg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Officers;