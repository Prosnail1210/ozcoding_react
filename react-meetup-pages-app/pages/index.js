import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      
        <MeetupList meetups={props.meetups}/>
      </main>
    </>
  );
}


export async function getServerSideProps(){
  const client = await new MongoClient(process.env.MONGO_URI)
  const db = client.db('meetupDB')

  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()
  return{
    props:{
      meetups:meetups.map(meetup=>({
        title:meetup.title,
        address: meetup.address,
        image: meetup.image,
        id:meetup._id.toString()
      }))
    }
  }
}