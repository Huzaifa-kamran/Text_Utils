import React from 'react'

export default function About(props) {
  
  const myStyle = {
    color: props.mode === "dark"?"#fff":"#000",
    backgroundColor: props.mode === "dark"?"#000":"#fff",
    marginTop: '70px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px grey',
    border: '2px solid grey',
    width:'80%'
}

  return (
    <>
    <div className="container my-4 d-flex justify-content-center align-items-center" >
<div style={myStyle}>
      <p>Welcome to TextUtils, your ultimate online tool for text manipulation and analysis. My name is <b>Huzaifa</b>, and I am a passionate web developer dedicated to creating intuitive and efficient digital solutions to simplify your tasks. At TextUtils, we offer a range of features designed to enhance your text editing experience, including word counting, character counting, and the ability to remove extra spaces effortlessly.</p>
      
      <p>As a web developer, I understand the importance of precision and efficiency in handling textual content, whether you're preparing a document, coding, or simply organizing your thoughts. I create this website in <b>React Js</b> to make it more fast and navigate from one page to another without loading. Our word counter tool provides an accurate count of words in any text, helping you meet specific length requirements with ease. The character counter feature ensures that you stay within character limits, which is crucial for platforms with strict character restrictions like social media or search engine meta descriptions.</p>
      
      <p>Moreover, our remove extra spaces function is perfect for cleaning up your text by eliminating unnecessary spaces, ensuring that your content is polished and professional. With a user-friendly interface and quick results, TextUtils is designed to save you time and effort.</p>
      
      <p>Join me on this journey to make text management simpler and more effective. Explore TextUtils and discover how our tools can assist you in achieving your writing goals with precision and ease. Thank you for choosing TextUtils, where efficiency meets simplicity.</p>
    </div>
  </div>
  </>
  )
}
