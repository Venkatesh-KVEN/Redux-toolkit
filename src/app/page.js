import React from 'react'
import Container from './components/container'
import Post from './components/post'
import Sidebar from './components/sidebar'

const Page = () => {
  return (
    <Container>



  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
  <div className="md:col-span-8 p-4 rounded">
      <Post/>
  </div>

  <div className="md:col-span-4 p-4 rounded">
      <Sidebar/>
  </div>
</div>
    </Container>
  )
}

export default Page
