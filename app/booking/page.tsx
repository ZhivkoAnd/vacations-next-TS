"use client"

const Booking = () => {


const vacations = [
    {
    city: "copenhagen",
    price: 230
    },
    {
        city: "Sofia",
        price: 100
        },
        {
            city: "Bucharest",
            price: 50
            },


]


const addToCart = (city: any) => {
  console.log(city)
}

  return (
    <div className="container">
    {vacations.map((city)=> {
        return <div key={city.city}><button onClick={() =>addToCart(city)}>{city.city}</button><div>{city.price}</div></div>
    })}
    </div>
  );
};

export default Booking;
