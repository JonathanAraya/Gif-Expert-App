import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['1', '2', '3'])

    // const handleAdd = () => {
    //     setCategories([...categories, '4']);
    // }

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />
        <ol>
            {
                categories.map(( cat ) => {
                    return <li key={ cat }>{cat}</li>
                })
            }
        </ol>
        </>
    )
}

export default GifExpertApp;