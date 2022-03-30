// Add your code here
/*document.querySelector('button').addEventListener('click', () => {

    fetchData()
    .then(result => {
        document.querySelector('#result').innerHTML = result.message;

    })
})

    function fetchData() {
        return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => data);
    }

    /*document.querySelector('button').addEventListener('click', () => {

        fetchData()
        .then(result => {
            document.querySelector('#result').innerHTML = result.message;
        })
    })

    function fetchData() {
        return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => data);
    }*/
    document.querySelector('button').addEventListener('click', () => {
        submitData('Andrew', 'anderw@pureaquasprings.com')
    })

    function submitData(name, email){
        return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email
            })
        })
        .then(res => res.json())
        .then(json => {
            document.body.innerHTML = json['id']
        })
        .catch((error) => {
            document.body.innerHTML = error.message;
        })
    }

    //function submitData()