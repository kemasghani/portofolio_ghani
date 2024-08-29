import { useEffect, useState } from 'react';
import $ from 'jquery';
import './SplashScreen.css'

export default function SplashScreen({ onAnimationEnd }) {
    const [dots, setDots] = useState([]);
    const [showRectangle, setShowRectangle] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);
    const [showSpeechBubble, setShowSpeechBubble] = useState(true);

    useEffect(() => {
        // Generate dots on the client side after component has mounted
        const generateDots = () => {
            const newDots = Array.from({ length: 250 }).map(() => {
                const left = Math.random() * 100;
                const delay = Math.random() * 2;
                const size = Math.random() * 5 + 3;
                const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

                return {
                    left: `${left}vw`,
                    animationDelay: `${delay}s`,
                    width: `${size / 2}px`,
                    height: `${size * 2}px`,
                    backgroundColor: color,
                };
            });

            setDots(newDots);
        };

        generateDots();

        // Trigger the rectangle after the dots animation
        setTimeout(() => {
            setShowRectangle(true);

            // Add the fly class when the rectangle reaches its final position
            setTimeout(() => {
                $("#Rectangle").addClass("fly");

                // Now animate the speech bubble once the Rectangle is shown
                setTimeout(() => {
                    const speechBubble = $("#SpeechBubble");
                    speechBubble.css({
                        "animation-name": "expand-bounce",
                        "animation-duration": "0.25s",
                    });

                    setTimeout(() => {
                        // Shrink the speech bubble
                        speechBubble.css({
                            "animation-name": "shrink",
                            "animation-duration": "0.1s",
                        });

                        // Make the speech bubble disappear after shrinking
                        setTimeout(() => {
                            setShowSpeechBubble(false);

                            // Trigger the disappear animation for the Rectangle
                            setTimeout(() => {
                                setAnimateOut(true);

                                // Remove the fly class 1 second after the speech bubble disappears
                                setTimeout(() => {
                                    $("#Rectangle").removeClass("fly");

                                    // Finally hide the Rectangle after the animation completes
                                    setTimeout(() => {
                                        setShowRectangle(false);
                                    }, 1000); // Animation duration matches 1s
                                }, 1000); // 1 second delay to remove the fly class
                            }, 1000); // Small delay before starting disappear animation
                        }, 100); // Wait for shrink animation to finish before hiding
                    }, 3000); // Timing after speech bubble appears
                }, 2000); // Small delay to ensure Rectangle is rendered before animation
            }, 1000); // Show Rectangle after 1s and add the fly class
        }, 1800); // Show Rectangle after 1.2 seconds
    }, []);

    return (
        <div className="h-[200vh] w-[100vw] overflow-visible container relative bg-white" onAnimationEnd={onAnimationEnd}>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="dot"
                    style={dot}
                ></div>
            ))}

            {showRectangle && (
                <div id="Rectangle" className={animateOut ? 'disappear' : ''}>
                    {showSpeechBubble && (
                        <div id="SpeechBubble">Hi, I'm Ghani</div>
                    )}
                    <img className='h-[300px] w-[200px]'
                        src="https://res.cloudinary.com/doafxvpml/image/upload/v1724482739/IMG_20240824_110436_lzzd7e.png"
                        alt="Sample"
                    />
                </div>
            )}
        </div>
    );
}
