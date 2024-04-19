import Card from "../shared/Card";


const info = [
    {
        url : "../assests/cauliflowerbites.webp" ,
        title : "Air Fried Keto Buffalo Cauliflower Bites",
        discription : "Lightly battered organic cauliflower tossed in homemade buffalo sauce wit...",
        rating: 5,
        price : `$${12.95}`
      
    },
    {
        url : "../assests/ketochickensoup.webp" ,
        title : "Air Fried Keto Buffalo Cauliflower Bites",
        discription : "Lightly battered organic cauliflower tossed in homemade buffalo sauce wit...",
        rating: 5,
        price : `$${12.95}`
      
    },
    {
        url : "../assests/NoSugarCheesecake.webp" ,
        title : "Air Fried Keto Buffalo Cauliflower Bites",
        discription : "Lightly battered organic cauliflower tossed in homemade buffalo sauce wit...",
        rating: 5,
        price : `$${12.95}`
      
    },
    {
        url : "../assests/cauliflowerbites.webp" ,
        title : "Air Fried Keto Buffalo Cauliflower Bites",
        discription : "Lightly battered organic cauliflower tossed in homemade buffalo sauce wit...",
        rating: 5,
        price : `$${12.95}`
      
    },

]

function MostLoved() {
    return (
        <>
            <div className="w-5/6 mx-auto pt-8">
                <h1 className="text-5xl text-[#3D0818] font-semibold mb-7">Most Loved</h1>
                <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 px-2">
                    <Card info={info[0]}/>
                    <Card info={info[1]}/>
                    <Card info={info[2]}/>
                    <Card info={info[3]}/>
                </div>

            </div>

        </>


    )
}

export default MostLoved