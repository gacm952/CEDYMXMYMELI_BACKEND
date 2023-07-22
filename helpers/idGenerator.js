const idGenerator = () => {
    const random = Math.random().toString(32).substring(2);
    const randomTwo = Date.now().toString(32);
    return random + randomTwo;

};

export default idGenerator;