import { useState } from "react"
import "../App.css"

let FoodMenu = ()=>{
    const [foodMenuList, setFoodMenuList] = useState([
        {
            id: 1,
            name: "Pizza",
            price: 10,
            description: "Delicious cheese pizza with tomato sauce and toppings.",
            image:"https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg" 
        },
        {
            id: 2,
            name:"Burger",
            price:8,
            description:"Juicy beef burger with lettuce, tomato, and cheese",
            image:"https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
        },
    ])
    const [name, setName]=useState("")
    const [description, setDescription]=useState("")
    const [price, setPrice]=useState(0)
    const [image, setImage]=useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("handle submit called")
        console.log({name, description, price, image})
        let data = {
            id: foodMenuList.length +1,
            name:name,
            description:description,
            price,
            image
        }
        setFoodMenuList([...foodMenuList, data])

    }

    return(
        
        <div class="fulbutta">
         <div class="menu">
            <h1>Food Menu</h1>
            <br></br>
            {
                foodMenuList.map(
                    (foodMenu)=>{
                        return(
                            //food item card
                            <div key={`${foodMenu.id}-${foodMenu.name}`}>
                                <h2>{foodMenu.name}</h2>
                                <p>{foodMenu.description}</p>
                                <p>Price:${foodMenu.price}</p>
                                <img src={foodMenu.image} alt={foodMenu.name} width="200"></img>
                                <div>
                                    <button id="edit-btn">Edit</button>
                                    <button>Delete</button>
                                </div>
                                <br></br><br></br>
                            </div>
                        )
                    }
                )
            }

        </div>
        <div class="list_section">
            <h1>Add Food Menu</h1>
            <form>
                <div>
                    <label>Name:</label><br></br>
                    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                <label>Description:</label><br></br>
                <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

                </div>
                <div>
                    <label>Price:</label><br></br>
                    <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                </div>
                <div>
                    <label>Image URL:</label><br></br>
                    <input type="text" name="image" value={image} onChange={(e)=>setImage(e.target.value)}></input>
                </div>
                <button id="menu-btn" type="submit" onClick={handleSubmit}>Add Food Menu</button>
            </form>
        </div>
        
        </div>
    )

}
export default FoodMenu