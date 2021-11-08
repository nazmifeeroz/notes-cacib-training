import './App.css'

import { Container, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'

const FRAMEWORKS_DATA = [
  {
    image: 'https://www.import.io/wp-content/uploads/2017/10/React-logo.png',
    title: 'React',
    description:
      'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    link: 'https://reactjs.org/',
  },
  {
    image:
      'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
    title: 'Angular',
    description:
      'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.',
    link: 'https://angular.io/',
  },
  {
    image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--wJ0gYHgm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/d440mmj72v2vi7ad76ir.png',
    title: 'Vue',
    description:
      'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members',
    link: 'https://vuejs.org/',
  },
  {
    image: 'https://miro.medium.com/max/1400/1*QGL_0ZCSxfOCRQLyrIfJeg.png',
    title: 'Svelte',
    description:
      'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.',
    link: 'https://svelte.dev/',
  },
]

function App() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {FRAMEWORKS_DATA.map(({ image, title, description, link }) => (
          <Grid item xs={3} key={title}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="React"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    window.location = link
                  }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default App
