function PageContentComponent(props) {
    return (
        <div className="container-fluid">
            <h3>{props.contentTitle}</h3>
            <div>
                <p>{props.contentParagraph}</p>
            </div>
        </div>
    );
}

export default PageContentComponent;