import React from 'react'
import { Link } from 'react-router-dom'

export default function TopHeader() {
    return (
        <div>
            <h4 className='columnheader'>Tourbay</h4>
            <div className='tab'>

                <Link to="/"><h4 className='Heading1' >Tours</h4></Link>
                <Link to="/"><h4 className='Heading2'>Add Tour</h4></Link>
                <Link to="/mytours"><h4 className='Heading3'>My Tours</h4></Link>
            </div>
        </div>
    )
}
