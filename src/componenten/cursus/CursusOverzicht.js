function CourseOverview() {
    return (
        <div className="course-overview-container">
            <div className="course-overview-container__percentage-container">
                <div className="course-overview-container__percentage">
                    <div className="progress-bar">
                        <div className="progress-bar_value" />
                    </div>
                    <div className="percentage-value"> 40%</div>
                </div>
            </div>
        </div>
    );
}

export default CourseOverview;