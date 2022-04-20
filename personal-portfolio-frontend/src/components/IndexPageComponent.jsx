import PageContentComponent from "./PageContentComponent";
import BannerComponet from "./BannerComponet";

function IndexPageComponent() {
    return (
        <div>
            <BannerComponet />
           <PageContentComponent
            contentTitle="This is a title"
            contentParagraph="This is the page content paragraph.This is the page content paragraph.This is the page content paragraph.This is the page content paragraph.This is the page content paragraph"/>
            <PageContentComponent
            contentTitle="This is a title"
            contentParagraph="This is the page content paragraph"/>
        </div>
    );
}

export default IndexPageComponent;