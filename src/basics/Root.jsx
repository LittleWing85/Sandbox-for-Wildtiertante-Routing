import NavigationMain from "./NavigationMain";
import Content from "./Content";
import Footer from "./Footer";

export default function Root() {
    return (
        <div className="mainContainer">
            <NavigationMain />
            <Content />
            <Footer />
        </div>
    );
}
