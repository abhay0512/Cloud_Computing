const WorkoutDetails = ({ workout }) => {

    let localDateString = new Date(Date.parse(workout.createdAt)).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    let now = new Date(localDateString);
    let dateString = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' });

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Created at: </strong>{dateString}</p>
        </div>
    );
};

export default WorkoutDetails;