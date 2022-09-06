import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {

  const { data:hotels , loading } = useFetch(
    `${process.env.REACT_APP_BASE_API}/hotels?featured=true&limit=4`
  );

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="fp">
          {hotels.length > 0 &&
            hotels.map((hotel, ind) => (
              <div className="fpItem" key={hotel?._id}>
                <img
                  src={
                    hotel?.photos.length > 0
                      ? hotel.photos[0]
                      : "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                  }
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{hotel.name}</span>
                <span className="fpCity">{hotel.city}</span>
                <span className="fpPrice">
                  Starting from ${hotel.cheapestPrice}
                </span>
                {hotel?.rating && (
                  <div className="fpRating">
                    <button>{hotel.rating}</button>
                    <span>
                      {hotel.rating > 4.6
                        ? "Excellent"
                        : hotel.rating > 4 && hotel.rating < 4.6
                        ? "Good"
                        : "Avarage"}{" "}
                    </span>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default FeaturedProperties;
