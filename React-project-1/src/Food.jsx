
function Food() {
    const food1 = "Orange";
    const food2 = "Banana";

    return (
        <food>
            <h1> Delicious Fruits:</h1>
            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
            <hr />
        </food>
    )
}

export default Food