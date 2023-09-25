import { useState,useEffect } from "react"
import './App.css'

export function App() {
    const [fact,setFact] = useState()
    const [imgUrl,setImg] = useState()
    
    useEffect(()=> {
        fetch(`https://catfact.ninja/fact`)
        .then(res => res.json())       
        .then(data => {
            const {fact} = data
            setFact(fact)

            const threeFirstWord = fact.split(' ', 3).join(' ')
            console.log(threeFirstWord)

            fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
              const {url} = response
              setImg(`https://cataas.com${url}`)
            } )
        
        })
    }, [])



    
    return (
        <main>
        <h1>Hola Mundo</h1>
        <section >
         <p>{fact}</p>
        {imgUrl && <img src={imgUrl} alt={`asdasd`}/>}
        </section>

        </main>
           
        
    )
}