import Image from "next/image"
import { useRouter } from "next/router"
import Card from "../ui/Card"
import classes from './MeetupItem.module.css'

const MeetupItem = ({id,image,title,address}) => {
    const router = useRouter()
    const handleClick = ()=>{
        router.push('/meetup/'+id)
    }
  return (
    <li className={classes.item}>
        <Card>
            <div className={classes.image}>

            <Image width={0} height={0}
            sizes="100vw" style={{widows:'100%', height:'auto'}} src={image}
            alt={title}
            />

            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <address>{address}</address>
            </div>
            <div className={classes.actions}>
                <button onClick={handleClick}>자세히 보기</button>
            </div>
        </Card>
    </li>
  )
}

export default MeetupItem