import React, { useEffect } from 'react';

const useScreenSize = () => {
const [size, setSize] = useState(initialeState:{...window.screen})

useEffect( effect: () => {
    const handleResize = () => setSize(...window.screen);
    
window.addEventListener('resize',handleResize);

return window.removeEventListener('resize',handleResize);
}, deps: [])

return size;
}

export default useScreenSize;