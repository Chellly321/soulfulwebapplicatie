function SelectedModule({selectedModule}) {
    return (
        <div className="selected-module-container">
            <div className="selected-module-container__content">
                <h1>{selectedModule.length > 0 ? selectedModule[0].module : "Module"}
                </h1>
                <p>
                    {selectedModule.length > 0 ? selectedModule[0].text : "Lorem ipsum dolor sit amet, " +
                        "consectetur adipisicing elit. Alias cumque, cupiditate deserunt dolorum esse expedita fugiat hic modi, nobis obcaecati, quo ratione suscipit tempora tempore voluptates. Dolores iusto nesciunt perferendis, quam sapiente soluta voluptate. " +
                        "Assumenda deserunt dicta dignissimos exercitationem impedit perspiciatis qui quidem tenetur. Dicta explicabo itaque nesciunt nulla voluptatem!"}
                </p>
            </div>
        </div>
    );
}

export default SelectedModule;