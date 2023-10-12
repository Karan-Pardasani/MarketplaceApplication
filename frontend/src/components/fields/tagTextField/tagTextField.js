// NOT Using this file currently
import React, { useState } from 'react'
import './tagTextField.css';
import Scrollbars from 'react-custom-scrollbars-2';
import { Input } from 'semantic-ui-react'

function TagTextField() {

  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);


  const onChange = (e) => {
    const {value} = e.target;
    setInput(value);
  }

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();
    if(key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)){
      e.preventDefault();
      setTags(prevState => [...prevState, trimmedInput]);
      setInput('');
    }

    if(key === 'Backspace' && !input.length && tags.length && isKeyReleased){
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);

    if ([ 9, 13, 27, 37, 38, 39, 40].includes(e.keyCode)) {
      e.preventDefault(); // Prevent the default action
    }

  }

  const onKeyUp = () => {
    setIsKeyReleased(true);
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag,i) => i !== index));
  }

  return (
      <Scrollbars style={{width: 300}} autoHeight autoHide >
        <div className='tag-container'>
          {tags.map((tag,index) => <div key={index} className='tag'>
            {tag}
            <button onClick={() => deleteTag(index)}>x</button>
            </div>)}
          <input
            value={input}
            placeholder='Enter a tag'
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={onChange}
          />
        </div>
      </Scrollbars>
  )
}

export default TagTextField