    import React from 'react';
    import './ArrowKeys.css';
    import mqtt from 'mqtt';

    // Tying in with MQTT
    export const publishMessage = (topic, message) => {
        const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt');
            client.on('connect', () => {
            client.publish(topic, message, { qos: 0 }, (error) => {
                if (error) {
                console.error('Failed to publish message:', error);
                } else {
                console.log(`Message "${message}" published to topic "${topic}"`);
                }
                client.end();
            });
        });
    };    

    // Defining ArrowKeys component that takes in onArrowClick property 
    const ArrowKeys = ({ onArrowClick }) => {
        const handleArrowClick = (direction) => {
            if (onArrowClick) {
                onArrowClick(direction);
            }
        };

        return (
            <div className="arrow-keys-container">
                <h3>Controls</h3>
                <div className="divider"></div>
                <div className="arrow-keys">
                    <button className="arrow up" onClick={() => handleArrowClick('up')}>
                        ↑
                    </button>
                    <div className="middle-row">
                        <button className="arrow left" onClick={() => handleArrowClick('left')}>
                            ←
                        </button>
                        <button className="arrow stop" onClick={() => handleArrowClick('stop')}>
                            •
                        </button>
                        <button className="arrow right" onClick={() => handleArrowClick('right')}>
                            →
                        </button>
                    </div>
                    <button className="arrow down" onClick={() => handleArrowClick('down')}>
                        ↓
                    </button>
                </div>
            </div>
        );
    };

    export default ArrowKeys;