import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useReducer } from "react";

const AddComment = ({ onAdd }) => {
  const formReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          data: { ...state.data, [action.fieldName]: action.payload },
          errors: {
            ...state.errors,
            [action.fieldName]:
              action.payload === "" ? `${action.fieldName} required` : "",
          },
        };
      // case "VALIDATE_FIELD":
      //   return {
      //     ...state,
      //     errors: {
      //       ...state.errors,
      //       [action.fieldName]: action.payload ? "" : action.errMsg,
      //     },
      //     //   isValid: action.payload,
      //     errorMessage: action.payload ? "" : action.errMsg,
      //   };
      case "VALIDATE":
        const errors = {};
        errors.comment = state.data.comment ? "" : "Comment required!";
        errors.rate = state.data.rate ? "" : "Rate required!";
        return {
          ...state,
          errors: errors,
        };
      default:
        return state;
    }
  };

  // Inizializzazione dello stato iniziale del form
  const initialFormState = {
    data: {
      comment: "",
      rate: "",
    },
    errors: {},
    isValid: false,
    errorMessage: "Enter data please",
  };

  const [formData, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = value.toString();

    // Aggiornamento dello stato con l'azione 'UPDATE_FIELD'
    dispatch({
      type: "UPDATE_FIELD",
      fieldName: name,
      payload: newValue,
    });
  };

  // Funzione per validare il campo
  // const handleValidation = (fieldName) => {
  //   // Esegui la logica di validazione
  //   let isValid = false;
  //   let fieldValue = formData.data[fieldName];
  //   let errMsg = "";
  //   if (fieldValue !== "") isValid = true;
  //   else {
  //     errMsg = `Please enter ${fieldName}`;
  //   }
  //   if (fieldName === "rate")
  //     if (parseInt(fieldValue) < 1 || parseInt(fieldValue) > 5)
  //       errMsg = `${fieldName} must be between 1 and 5`;

  //   // Aggiornamento dello stato con l'azione 'VALIDATE_FIELD'
  //   dispatch({
  //     type: "VALIDATE_FIELD",
  //     fieldName: fieldName,
  //     payload: isValid,
  //     errMsg: isValid ? "" : `${fieldName}: inserisci`,
  //   });
  // };

  // Funzione per gestire l'invio del form
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "VALIDATE" });
    let hasError = false;
    for (let key in formData.errors) {
      if (formData.errors.hasOwnProperty(key)) {
        // console.log(`${key}: ${formData.errors[key]}`);
        if (formData.errors[key] !== "") {
          alert(formData.errors[key]);
          hasError = true;
          break;
        }
      }
    }
    if (Object.keys(formData.errors).length < 2) {
      alert("Complete the form");
    } else if (!hasError) {
      onAdd(formData.data);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="text-center">Add new comment</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter comment"
          name="comment"
          value={formData.data.comment}
          onChange={handleChange}
          // onBlur={() => handleValidation("comment")}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Rate (1-5)</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="5"
          placeholder="Enter rate"
          name="rate"
          value={formData.data.rate}
          onChange={handleChange}
          // onBlur={() => handleValidation("rate")}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
