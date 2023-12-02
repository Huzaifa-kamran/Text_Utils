import React from 'react'

export default function About(props) {
  
  const myStyle = {
    color: props.mode === "dark"?"#fff":"#000",
    backgroundColor: props.mode === "dark"?"#000":"#fff"
}


//     const [bodyStyle, setBodyStyle] = useState({color: "#000",
//     backgroundColor: "#fff"
// })

//     const [btnText, setBtnText] = useState("Switch to Dark")
//     const [btnClass, setBtnClass] = useState("btn-dark")

    // const toggleTheme = () =>{
    //    if( myStyle.color === "#000"){
    //     setStyle({
    //         color: "#fff",
    //         backgroundColor: "#000"
    //     })
    //     setBtnText("Switch to Light")
    //     setBtnClass("btn-light")
    //     setBodyStyle({
    //         color: "#fff",
    //         backgroundColor: "#000"
    //     })

    //    }else{
    //     setStyle({
    //         color: "#000",
    //         backgroundColor: "#fff"
    //     })
    //     setBtnText("Switch to Dark")
    //     setBtnClass("btn-dark")
    //     setBodyStyle({
    //         color: "#000",
    //         backgroundColor: "#fff"
    //     })
    //    }
    // }

    // const useEffects = () =>{
    //     document.body.style.color = bodyStyle.color;
    //     document.body.style.backgroundColor = bodyStyle.backgroundColor;
    // }
    //  useEffects()
  return (
    <>
    <div className="container my-4">
    <div className="accordion" id="accordionExample" >
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingOne">
        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div  id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development."
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development."
        
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingThree">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development."
        
        </div>
      </div>
    </div>
  </div>
  </div>
  {/* <div className='container m-3'>
    <button className={`btn ${btnClass}`} onClick={toggleTheme}>{btnText}</button>
  </div> */}
  </>
  )
}
