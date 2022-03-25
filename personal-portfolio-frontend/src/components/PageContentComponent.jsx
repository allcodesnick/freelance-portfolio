function PageContentComponent(props) {
    return (
        <div>
            <h3>{props.contentTitle}</h3>
            <div>
                <p>{props.contentParagraph}</p>
            </div>
        </div>
    );
}

export default PageContentComponent;