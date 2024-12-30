const {useState,useEffect} = React;

marked.setOptions({
  breaks:true
})

const renderer = new marked.Renderer();

const initialText = ` # H1 Heading 
## H2 Subheading 
[Example Link](https://www.example.com) 
 \`Inline code\` 
 \`\`\` 
 Code block 
 \`\`\` 
 - List item 
 > Blockquote 
 ![Example Image](https://www.example.com/image.jpg) 
 **Bold text** `;
const Preview =({newText})=>{
  return(
    <div
    dangerouslySetInnerHTML={{
      __html: marked(newText, { renderer: renderer }), }}
    id='preview'
    ></div>
  )
}

const App =()=>{
  const [text,setText]= useState(initialText);

  const handleChange=(e)=>{
    setText(e.target.value)
  }
  return(
    <div className='container'>
   
    <div className='row'>
      <div className='col-md-6 text'>
      <h1 id='h1' className='text-center my-4'>My Markdown Previewer</h1>
      <textarea value={text} onChange={handleChange} id="editor" ></textarea>
      </div>
      <div className='col-md-6 my-5'>
      <h3 id='h3'>Output</h3>
      <Preview newText={text}/>
      </div>
    </div>
    
   
  </div>
  )
  
}



ReactDOM.render(<App/>,document.getElementById("root"));