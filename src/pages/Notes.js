import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import NoteCard from '../Components/NoteCard';
import Masonry from 'react-masonry-css';
export default function Notes() {

const [notes,setNotes]=useState([])

useEffect(()=>{
  fetch("http://localhost:8000/notes")
  .then(res => res.json())
  .then(data => setNotes(data))
},[notes])
const breakpoints = {
  default: 3,
  1100: 2,
  700: 1
};
  return (
    <Container>
      {/* <Grid container spacing={3}>
     {notes.map(note =>(
       <Grid item key={note.id} xs={12} md={6} lg={4}>
      <NoteCard note={note}/>
       </Grid>
     ))}
     </Grid> */}
     <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {notes.map(note => (
          <div key={note.id}>
            <NoteCard note={note} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
