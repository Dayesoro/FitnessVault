import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';
import { BsTrash } from 'react-icons/bs';

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()


    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('https://fitness-vault.onrender.com/api/workouts' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }

        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p className="mt-3">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span onClick={handleClick}>
                <BsTrash className="text-danger" style={{ cursor: 'pointer' }} />
            </span>
        </div>
    )
}

export default WorkoutDetails