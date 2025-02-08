import Gallery from "./components/gallery";
import HeroPage from "./components/heroPage";
import HeroPage2 from "./components/heroPage2";
import NewArrivals from "./components/NewArrivals";
import Post from "./components/post";


export default function Home(){
return(
    <div>
    <HeroPage/>
    <Gallery/>
    <NewArrivals/>
    <HeroPage2/>
    <Post/>
    </div>
)
}