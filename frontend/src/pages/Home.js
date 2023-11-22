import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { Container, Row, Col } from "react-bootstrap"

// components
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {

    const { workouts, dispatch } = useWorkoutsContext()


    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <Container>
            <Row xs={1} md={2} xl={3} className="g-4">
                {workouts && workouts.map((workout) => (
                    <Col key={workout._id}>
                        <WorkoutDetails workout={workout} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}


export default Home