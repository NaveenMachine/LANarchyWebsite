import './Registration.css'

const Registration = () => {
  return (
    <div className="registration-section">
        <div className="registration-container">
            <h1 className="registration-title">Join The Club</h1>
            <p className="registration-subtitle">Become part of Ohio State's premier gaming community</p>
            
            <div className="registration-content">
                {/* <div className="info-cards">
                    <div className="info-card">
                        <div className="card-icon">🎮</div>
                        <h3>Weekly Events</h3>
                        <p>Join us every Sunday at 6:00 PM in Bradley Hall Lobby for exciting gaming sessions</p>
                    </div>
                    
                    <div className="info-card">
                        <div className="card-icon">🏆</div>
                        <h3>Tournaments</h3>
                        <p>Compete in regular tournaments featuring Mario Kart, Halo, and Super Smash Bros</p>
                    </div>
                    
                    <div className="info-card">
                        <div className="card-icon">🤝</div>
                        <h3>Community</h3>
                        <p>Connect with fellow gamers and build lasting friendships</p>
                    </div>
                </div> */}

                <div className="join-methods">
                    {/* <h2 className="join-title">How to Join</h2> */}
                    
                    <div className="method-cards">
                        <a href="https://discord.gg/xfDzKmFzCT" className="method-card discord" target="_blank" rel="noopener noreferrer">
                            <div className="method-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
                            </div>
                            <div className="method-content">
                                <h3>Join Discord</h3>
                                <p>Connect with our community, get event updates, and chat with members</p>
                                <span className="method-cta">Join Server →</span>
                            </div>
                        </a>

                        <a href="mailto:LANarchyOSU@gmail.com" className="method-card email">
                            <div className="method-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div className="method-content">
                                <h3>Email Us</h3>
                                <p>Send us a message for more information or specific questions</p>
                                <span className="method-cta">Send Email →</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="membership-benefits">
                    <h2 className="benefits-title">Membership Benefits</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <span className="benefit-icon">🎯</span>
                            <span>Access to all events and tournaments</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-icon">🎮</span>
                            <span>Free gaming equipment and setups</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-icon">🏆</span>
                            <span>Competition prizes and rewards</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-icon">📢</span>
                            <span>Exclusive announcements and updates</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Registration