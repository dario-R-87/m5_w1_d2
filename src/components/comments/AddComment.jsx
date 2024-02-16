import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddComment = ({ onAdd }) => {
    return (
        <Form onSubmit={onAdd}>
            <h3 className="text-center">Add new comment</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Comment</Form.Label>
                <Form.Control type="email" placeholder="Enter comment" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rate (1-5)</Form.Label>
                <Form.Control type="number" min="1" max="5" placeholder="Rate" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}



export default AddComment;