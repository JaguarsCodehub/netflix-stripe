const fetchData = async() => {
    
    try {
        
    } catch (error) {
        
    }
    const response = await fetch('https://jsonholder.com');
    const data = await response.json();
    console.log(data);
}