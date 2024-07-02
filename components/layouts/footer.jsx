import React from 'react';
import  styles from "../../styles/app.module.css"
import Link from "next/link";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <div className={styles.footerImg}>
                        <img src="/1.png"/>
                    </div>
                    <div className={styles.footerText}>
                        <p>Welcome to Tourigo, your gateway to</p>
                        <p>unforgettable adventures and immersive</p>
                        <p>travel experiences. Explore with us and let</p>
                        <p>your journey begin!</p>
                    </div>
                </div>
                <div className={styles.pagesSection}>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Travel Guides</li>
                        <li>Traveler Review</li>
                        <li>Cotact Now</li>
                    </ul>
                </div>
                <div className={styles.pagesSection}>
                    <h4>Service</h4>
                    <ul>
                        <li>Destinations</li>
                        <li>Tour Listing</li>
                        <li>Tour Booking</li>
                        <li>Travel Agents</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className={styles.pagesSection}>
                    <h4>Recet Post</h4>
                    <div className={styles.pagesSectionLogo}>
                        <div className={styles.pagesLogo}>
                            <img src="/blog-image-12.png"/>
                            <div className={styles.imgColor}>

                            </div>
                        </div>
                        <div className={styles.pagesText}>
                            <p>Trekker's Tales: Navigating the </p>
                            <p>World's Wonders</p>
                        </div>
                    </div>
                    <div className={styles.pagesSectionLogo}>
                        <div className={styles.pagesLogo}>
                            <img src="/blog-image-13.png"/>
                            <div className={styles.imgColor}>

                            </div>
                        </div>
                        <div className={styles.pagesText}>
                            <p>Exploring the World, </p>
                            <p>One Adventure at a Time </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.autor}>
                <div className={styles.autorText}>
                    <p>Հեղինակային իրավունքներ ©2024. Բոլոր իրավունքները պաշտպանված են.</p>
                </div>
                <div className={styles.autorItem}>
                    <div className={styles.footerItem}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHO4P97LlRyQhG1B-u7uFwi3-GYgiu_-Bcg&s"
                            alt='sss'/>
                    </div>
                    <div className={styles.footerItemText}>
                        <p> Կայքը պատրաստված է GeekLab ընկերության կողմից</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;