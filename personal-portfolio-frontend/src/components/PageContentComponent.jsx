import '../pageContent.css';

function PageContentComponent(props) {
    return (
        <div id="content-section">
            <h3>{props.contentTitle}</h3>
            <div>
                <p>{props.contentParagraph}</p>
            </div>
        </div>
    );
}

export default PageContentComponent;