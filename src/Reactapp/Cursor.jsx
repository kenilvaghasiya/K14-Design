import react, { useEffect } from "react"
import './css/cursor.css'
const Cursor=()=>{
    useEffect((e)=>{
        const s = document.getElementById("cursor")
        document.addEventListener('mousemove', (e) => {
            s.setAttribute('style', "top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;")
            s.setAttribute('bubbles','false')
        },false)
    })
    return(<>
        <div id="cursor" ></div>
    </>)
}
export default Cursor