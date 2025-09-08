let users = `[
    {
        "name": "giorgi",
        "rank": 60,
        "programmer": true
    },
    {
        "name": "zura",
        "rank": 50,
        "programmer": false
    },
    {
        "name": "zuka",
        "rank": 50,
        "programmer": true
    },
    {
        "name": "nika",
        "rank": 15,
        "programmer": true
    },
    {
        "name": "aleqsa",
        "rank": 90,
        "programmer": false
    }
]`

const task1 = JSON.parse(users)

const task2 = task1.filter(user => user.programmer)