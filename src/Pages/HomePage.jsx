// import MySwiper from "../Utils/swiper";

// export default function HomePage(){
//     const movies = {
//         category : ["What's On Now >", 
//             "Tune In Now: Popular Shows >",
//             "Binge-Worthy Shows >",
//             "The Love Hub >",
//             "Most Popular in France >",
//             "That's so 90s >",
//             "Reel Mockbusters >",
//             "Most Watchlisted This Week >"
//         ],
//         pageCount : 0
//         }
   
//     function renderMovies(){
//         return movies.map(function({category, pageCount}){
//             return MySwiper(category, ++pageCount)
//         })
//     }
//     return(
// <>
// {renderMovies()}
// </>
// )
// }
import MySwiper from "../Utils/swiper";

export default function HomePage() {
  const categories = [
    { title: "What's On Now >", page: 1 },
    { title: "Tune In Now: Popular Shows >", page: 2 },
    { title: "Binge-Worthy Shows >", page: 3 },
    { title: "The Love Hub >", page: 4 },
    { title: "Most Popular in France >", page: 5 },
    { title: "That's so 90s >", page: 6 },
    { title: "Reel Mockbusters >", page: 7 },
    { title: "Most Watchlisted This Week >", page: 8 },
  ];

  // این تابع برای رندر کردن MySwiper برای هر دسته‌بندی
  function renderMovies() {
    let element;
    for(let category of categories){
      element += <MySwiper key={category.page} title={category.title} page={category.page} />
    }
    //return(
    //  <>
    //  {element}
    //  </>
    //)
    return <MySwiper categories={categories}/>
    // return categories.map(({ title, page }) => (
    //    <MySwiper key={page} title={title} page={page} />
    //  ));
    //return(<h1>HOME PAGE</h1>)
  }

  return (
    <>
      {renderMovies()}
    </>
  );
}

