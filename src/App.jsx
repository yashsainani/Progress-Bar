import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [percentage, setPercentage] = useState(0);
  let timerId;

  const progressBar = () => {
    timerId = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;

        if (newPercentage === 100) {
          clearInterval(timerId);
        }

        return newPercentage;
      })
    }, 100);
  };

  useEffect(() => {
    progressBar();
    
    return () => {
      clearInterval(timerId);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{'--leftD' : `-${100 - percentage}%`, '--colorD' : percentage > 51 ? 'whitesmoke' : 'black'}}>
        <p>{percentage}%</p>
      </div>
      <h2>{percentage === 100 ? 'Completed!' : 'Loading.....'}</h2>
    </div>
  )
}

export default App;