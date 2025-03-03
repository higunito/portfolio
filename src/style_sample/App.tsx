import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const light = document.getElementById('light');
      if (light) {
        const lightWidth = light.offsetWidth;
        const lightHeight = light.offsetHeight;
        light.style.left = `${event.clientX - lightWidth / 2}px`;
        light.style.top = `${event.clientY - lightHeight / 2}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="light"></div>
      {/* <div className="overlay"></div> */}
      <h1 className="text">R3F Sample</h1>
    </>
  );
}

export default App;
