import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../Components/BackButton.jsx'
import Spinner from '../Components/Spinner.jsx'

const ShowBooks = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    
  })

  return (
    <div>
      
    </div>
  )
}

export default ShowBooks