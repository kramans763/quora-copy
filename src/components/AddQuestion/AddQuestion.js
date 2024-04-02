import React, { useState } from 'react'
import "./AddQuestion.css"
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

const AddQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [newQuestionContent, setNewQuestionContent] = useState('');
  const [newQuestionImage, setNewQuestionImage] = useState();
  const [imageUrl, setImageUrl] = useState([]);
  const navigate=useNavigate();

  const handleAddQuestion = () => {
    const authToken=localStorage.getItem('authToken');
    const formData = new FormData();

    formData.append("title",newQuestionTitle );
    formData.append("content",newQuestionContent );
    formData.append("images",newQuestionImage, imageUrl );
        

    fetch('https://academics.newtonschool.co/api/v1/quora/post', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'projectID': 'f104bi07c490',
        // 'Content-Type': 'multipart/form-data',
      
      },

      body: formData,
      redirect: 'follow'
    })
    .then(response => response.text())
    .then(data => {

      setQuestions([...questions, data]);
      setNewQuestionTitle('');
      alert("Question added")
    })
    
    .catch(error => console.error('Error adding question:', error));
  };
  

  const handleImageOnChange=(e)=>{
    setNewQuestionImage(e.target.files[0]) 
    setImageUrl(e.target.value);
  }
  console.log("im", newQuestionImage);
  console.log("ques", imageUrl);
  
  const handleCancel=()=>{
    navigate("/");
  }
  return (
    <div >
      <Navbar/>
      <div className='add-question dark:bg-neutral-800 dark:text-zinc-400'>
        <div  className= 'add-question-heading' >
            <h2>Add Question</h2>
        </div>
        <div className='add-question-tips'>
            <p>Tips on getting good answers quickly</p>
             <ul>
                <li>Make sure your question has not been asked already</li>
                <li>Keep your question short and to the point</li>
                <li>Double-check grammar and spelling</li>
             </ul>
        </div>
        <div  className='add-question-form'>
            <input type="text" 
                   placeholder='Start your question with "what" , "how ", "why", etc.'
                   value={newQuestionTitle}
                   onChange={(e) => setNewQuestionTitle(e.target.value)}
            />
            <input type='text'
                   placeholder='enter content'
                   value={newQuestionContent}
                   onChange={(e) => setNewQuestionContent(e.target.value)}
                   />
            <input type='file' 
                   placeholder='enter image'
                   value={imageUrl}
                   onChange={handleImageOnChange }
                   />       
            <div className='add-question-btns'>
               <button className='add-question-btns-cancel' onClick={handleCancel}>Cancel</button>
               <button  className='add-question-btns-add' onClick={handleAddQuestion}>Add Question</button>
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default AddQuestion