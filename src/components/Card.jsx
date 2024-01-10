import React, { useState } from 'react'
import QRCode from "react-qr-code";


function Card() {
    const[text,settext]=useState('')
    return (
        <div className='card' style={{width:'400px',height:'400px',backgroundColor:'white',border:'1px solid #ccc', boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)',borderRadius:'30px',alignContent:'center'}}>
            <h3 style={{color:'black',paddingLeft:'86px'}}>Qrcode generator</h3>
            <input type="text" className='form-control w-50 mt-3' placeholder='plese enter the text' style={{margin:"blue", marginLeft:'102px'}} onChange={(e)=>{settext(e.target.value)}}/>
            <div>
                <QRCode value={text} className='mt-3' style={{width:'413px',height:'262px'}}></QRCode>
            </div>

        </div>




    
    )
}

export default Card