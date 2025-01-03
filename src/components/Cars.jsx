


function Cars(){
    const cars = [ "BMW", "Audi", "Mercedes", "Toyota", "Honda" ];

    return(
        <div>
            <p>
                {cars.map(car =>
                 <p>{car}</p>
                )}

            </p>
        </div>
    )
}


export default Cars;