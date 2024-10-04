import React from 'react';
import './styles.css';
import workrow1 from '../../assets/Workrow/workrow1.png';
import workrow2 from '../../assets/Workrow/workrow2.png';
import workrow3 from '../../assets/Workrow/workrow3.png';
import workrow4 from '../../assets/Workrow/workrow4.png';
import workrow5 from '../../assets/Workrow/workrow5.png';
import workrow6 from '../../assets/Workrow/workrow6.png';
import workrow7 from '../../assets/Workrow/workrow7.png';
import workrow8 from '../../assets/Workrow/workrow8.png';

const WorkRow: React.FC = () => {
    
    const images = [workrow1, workrow2, workrow3, workrow4, workrow5, workrow6, workrow7, workrow8];

    const shuffleArray = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledImages = shuffleArray([...images]);

    return (
        <section className="workrow-section">
            <div className="workrow-container">
                <div className="workrow motion-left">
                    
                    {shuffledImages.concat(shuffledImages).map((img, index) => (
                        <div key={index} className="workrow-item">
                            <img src={img} alt={`Work ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="workrow motion-right">
                    
                    {shuffledImages.concat(shuffledImages).map((img, index) => (
                        <div key={index} className="workrow-item">
                            <img src={img} alt={`Work ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkRow;
