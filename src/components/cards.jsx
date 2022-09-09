import Card from "./card"

function Cards (){
    return(
        <div>
            <Card product="TV" price="90000" description="High resolution TV, it is like having a cinema at home!" />
            <Card product="Microwave" price="10000" description="Nothing like the good old Mikey!" />
            <Card product="Home Theater" price="50000" description="Angels will sing in your living room" />
            <Card product="Videogame Console" price="120000" description="Remember Tamagotchi?" />
        </div>
    )
}

export default Cards