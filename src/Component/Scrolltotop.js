import React, { useRef } from 'react';

function ScrollToTop() {
    const scrollRef = useRef();
    const Scroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behaviour: 'smooth' });
        }}

        return (
            <div style={{ height: '400px', overflowY: 'scroll' }} ref={scrollRef}>
                <div style={{ height: '1500px' }}>
                    <p>Scroll down to see the button...</p>
                    <button onClick={Scroll} style={{ position: 'fixed', bottom: '20px', backgroundColor: 'blue', padding: '10px', zIndex: 1000 }}>
                        Scroll To Top
                    </button>
                </div>
            </div>
        ) 
    };

    export default ScrollToTop;