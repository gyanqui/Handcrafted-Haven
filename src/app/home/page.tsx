import ArtistStory from "../ui/landing/artist-story"
import CategoryNav from "../ui/home/CategoryNav"
import ProductWrapper from "../ui/home/ProductWrapper"
export default function Page() {
    return (
        <div className="min-w-[390px]">
            <CategoryNav />
            <ArtistStory />
            <ProductWrapper />
        </div>
        
    )
}