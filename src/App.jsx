import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Footer from './components/Footer';
import Activity from './components/Activity';
import Internship from './components/Internship'
import { Analytics } from '@vercel/analytics/react';

function App() {
  
  return <>
    <div className=' bg-grey-900'></div>
    <Header/>
    <Profile />
    <Activity />
    <Introduction/>
    <Skills />
    <Internship />
    <Footer />
    <Analytics />
    
  </>

}

export default App
