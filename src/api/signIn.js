const signIn = (email, password) => (
    fetch('http://localhost:3000/dangnhap', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

export default signIn;
