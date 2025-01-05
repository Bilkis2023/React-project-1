

function Hobby() {
   const coding = "Coding & Debugging";
   const gardening = "gardening";

    return(
        <Hobby> 
            <h1> My hobbies list is here: </h1>
            <ul>
                <li>{coding}</li>
                <li>{gardening}</li>
            </ul>
        </Hobby>
    )
}

export default Hobby