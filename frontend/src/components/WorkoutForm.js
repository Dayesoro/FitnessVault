import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { Modal, Button } from 'react-bootstrap';

const WorkoutForm = ({ showModal, handleClose }) => {
    const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const resetForm = () => {
        setTitle('');
        setLoad('');
        setReps('');
        setError(null);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            resetForm() // Reset the form after successfully adding a workout
            console.log('new workout added', json);
            dispatch({ type: 'CREATE_WORKOUT', payload: json });
            handleClose(); // Close the modal after adding the workout
        }
    };

    const handleCloseModal = () => {
        resetForm(); // Reset the form when the modal is closed
        handleClose();
    };


    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add a New Workout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <label>Exercise Title:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

                    <label>Load (in kg):</label>
                    <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} />

                    <label>Reps:</label>
                    <input type="number" onChange={(e) => setReps(e.target.value)} value={reps} />

                    {error && <div className="error">{error}</div>}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="info" onClick={handleSubmit}>
                    Add Workout
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default WorkoutForm