import { useRef } from "react";
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';
const NewMeetupForm = ({router}) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef()
    const addressInpurRef = useRef();
    const descriptionInputRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInpurRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription
        }

        handleAddMeetup(meetupData)
    }
    const handleAddMeetup = async (enteredMeetupData) =>{
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        router.push('/')
    }
  return (
    <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.control}>
                <label htmlFor="title">
                    모임 이름
                </label>
                <input type="text"
                    id="title"
                    required
                    ref={titleInputRef}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">
                    모임 사진
                </label>
                <input type="url"
                    id="image"
                    required
                    ref={imageInputRef}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">
                    주소
                </label>
                <input type="text"
                    id="address"
                    required
                    ref={addressInpurRef}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">
                    설명
                </label>
                <textarea type="text"
                    id="description"
                    required
                    rows='5'
                    ref={descriptionInputRef}
                />
            </div>
            <div className={classes.actions}>
                <button>모임 생성하기</button>
            </div>
        </form>
    </Card>
  )
}

export default NewMeetupForm