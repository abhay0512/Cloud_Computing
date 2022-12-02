import { useEffect, useState } from "react";

import WorkoutDetails from '../components/workoutDetails';

const Home = () => {

    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:5000/api/workouts');
            const json = await response.json();
            if (response.ok) {
                setWorkouts(json.workouts);
            }
        };

        fetchWorkouts();
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((w) => (
                    <WorkoutDetails key={w._id} workout={w} />
                ))}
            </div>
        </div>
    );
};

export default Home;