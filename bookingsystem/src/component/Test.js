import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Test = () => {

    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 3),
            key: 'selection'
        }
    ])

    // open close
    const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnEscape = (e) => {
        // console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
            console.log(range)
        }
    }

    function handleset(e) {
        console.log(e.startDate)
        setRange({
            startDate: (format(e.startDate)),
        })
        console.log(range)
    }

    return (
        <div className="calendarWrap">

            <input
                value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
                readOnly
                className="inputBox"
                onClick={() => setOpen(open => !open)}
            />

            <div ref={refOne}>
                {open &&
                    <DateRange
                        //onChange={item => handleset(item.selection)}
                        onChange={item => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="calendarElement"
                    />
                }
            </div>

        </div>
    )
}

export default Test















// import { useEffect, useRef, useState } from 'react'
// import { Calendar } from 'react-date-range'

// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'
// import { DateRange } from '@mui/icons-material'
// import format from 'date-fns/format'
// import { addDays } from 'date-fns'


// export default function Test() {
//     const [calendar, setCalendar] = useState('')
//     const [open, setOpen] = useState(true);
//     const refOne = useRef(null)
//     const [range, setRange] = useState([
//         {
//             startDate: new Date(),
//             endDate: addDays(new Date(), 7),
//             key: 'selection'
//         }
//     ])

//     useEffect(() => {
//         document.addEventListener('keydown', hideOnEscape, true)
//         document.addEventListener('click', hideOnclickOutside, true)
//     }, [])
//     function hideOnEscape(e) {
//         console.log(e.key)
//         if (e.key === 'Escape') {
//             setOpen(false);
//         }

//     }
//     const hideOnclickOutside = (e) => {
//         if (refOne.current && !refOne.current.contains(e.target)) {
//             setOpen(false);
//         }
//     }

//     const handleSelect = (date) => {
//         setCalendar(format(date, 'MM/dd/yyyy'))
//     }

//     return (
//         <div className='calendarWrap'>
//             <input
//                 value={`${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(range[0].endDate, 'MM/dd/yyyy')}`}
//                 readOnly
//                 className='inputBox'
//                 onClick={() => setOpen(true)}
//             />
//             <div ref={refOne}>
//                 {open &&
//                     <DateRange
//                         date={new Date()}
//                         onChange={item => setRange([item.selection])}
//                         // editeableDateInputs={true}
//                         // moveRangeOnFirstSelection={false}
//                         ranges={range}
//                         months={1}
//                         direction='horzontal'
//                         className="calendarElement"
//                     />
//                 }
//             </div>
//         </div>

//     )
// }
