

export default function Tasks(){

    const tasks =[
        { id: 1, title: 'Finish assignment', completed: false },
        { id: 2, title: 'Submit Assignemt', completed: true },
        { id: 3, title: 'Prepare for next class', completed: false }
    ]

    return(
        <main>
            <h1>Task List</h1>
            <ul>
                    {tasks.map(task=> <li key = {task.id}>{task.title}</li>)}
            </ul>
        </main>
    )
}