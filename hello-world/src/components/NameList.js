import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 25,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Clark',
            age: 26,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]



    const personList = persons.map(person => <Person key={person.id} person={person} />)
    // const personList = persons.map(person => (
    //     <h2>
    //         I am {person.name}
    //     </h2>
    // ))
    return <div>{personList}</div>




    // return (

    //     <div >
    //         {
    //             names.map(x => <li>{x}</li>)
    //         }
    //     </div>
    // )

}

export default NameList