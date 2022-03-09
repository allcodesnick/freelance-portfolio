function PageContentComponent(props) {
    return (
        <div>
            <h3>Index Page from react</h3>
            <div class="row">
                <div class="col-8">Hello, {props.name}</div>
                <div class="col-4">col-4</div>
            </div>
        </div>
    );
}

export default PageContentComponent;