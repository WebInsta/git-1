import React from 'react'
import Navbar from '../components/Navbar'
import Cardtemplate from '../components/Cardtemplate'

const MyProjects = () => {


  


  const projects = [
    { id: 1, title: 'Coffee Roasters', link: 'https://vercel.com/birbalo', rasm: "https://cdn.dribbble.com/userupload/2801383/file/original-b27501652ce21b1e6380ea6210a9e6f9.jpg?resize=400x0" },
    { id: 2, title: 'Weather app', link: 'https://vercel.com/birbalo', rasm: "https://s3-alpha.figma.com/hub/file/3863763275/43bb9a44-3863-4ff2-ad24-a2de0a50d129-cover.png" },
    { id: 3, title: 'Floor Planer', link: 'https://vercel.com/birbalo', rasm: "https://www.rayvatengineering.com/assets/upload/blog/3D-Floor-Plan-Ground-Floor-1160x700.jpg" },
    { id: 4, title: 'Miro Desk', link: 'https://vercel.com/birbalo', rasm: "https://help.miro.com/hc/article_attachments/16763215834386" },
    { id: 5, title: 'TODO LIST', link: 'https://vercel.com/birbalo', rasm: "https://blog.teamup.com/wp-content/uploads/2021/12/todo-header.png" },
  ]

  return (
    <header className='container mx-auto max-w-[80%] py-10 h-screen max-h-screen flex gap-5 '>
      <Navbar />
      <div className='flex justify-between items-center w-full border-2 border-sky-400 p-10 mt-5 rounded-3xl shadow-inner shadow-sky-400 flex-wrap gap-5'>
        {projects.map(item => (
          <Cardtemplate link={item.link} rasm={item.rasm} title={item.title} />
        ))}
      </div>
    </header>
  )
}

export default MyProjects