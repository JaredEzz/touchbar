export const defaultState = {
    users:[{
        id:"U1",
        name:"Dev"
    },{
        id: "U2",
        name: "Jared"
    }],
    groups:[{
        name: "To Do",
        id: "G1",
        owner: "U1"
    },{
        name: "In Progress",
        id: "G2",
        owner: "U1"
    },{
        name: "Complete",
        id: "G3",
        owner: "U1"
    }],
    tasks: [{
        name: "Do Homework",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false
    },{
        name: "Study for test",
        id: "T2",
        group: "G1",
        owner: "U1",
        isComplete: false
    },{
        name: "Plan party",
        id: "T3",
        group: "G2",
        owner: "U2",
        isComplete: false
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!"
    }]
}