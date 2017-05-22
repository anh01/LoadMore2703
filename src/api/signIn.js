const signIn = (email, password) => (
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.text())
);

export default signIn;
