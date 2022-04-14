import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import moment from 'moment';

// import saveData from "./some_other_file";

const Styles = styled.div`
 background: lavender;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
 }
`;

export function addressValidator(address) {
 if (address === "123 1st St., New York, NY") {
   return true;
 }
 return false;
}

export function Error({ errors }) {
 return <div className={"error"}>{errors ? errors.message : " "}</div>;
}

export function Form() {
 const { register, errors, handleSubmit } = useForm();

 return (
   <form onSubmit={handleSubmit(data => saveData(data))}>
     <h1>New Order</h1>
     <label>Name</label>
     <input name="name" ref={register({ required: 'Required' })} />
     <Error errors={errors.name} />
     <label>Address</label>
     <input
       name="address"
       ref={register({
         required: 'Required',
         validate: value => addressValidator(value) || 'Invalid address',
       })}
     />
     <Error errors={errors.address} />
     <label>Date</label>
     <input
       name="date"
       type="date"
       max={moment().format("YYYY-MM-DD")}
       ref={register({ required: 'Required' })}
     />
     <Error errors={errors.date} />
     <label>Order Number</label>
     <input
       name="order"
       ref={register({
         required: 'Required',
         minLength: {
           value: 14,
           message: 'Order number too short',
         },
         maxLength: {
           value: 14,
           message: 'Order number too long',
         },
         pattern: {
           value: /\d{14}/,
           message: "Invalid order number",
         },
     })} />
     <Error errors={errors.order} />
     <input type="submit" className="submitButton" />
   </form>
 );
}

export default function App() {
 return (
   <Styles>
     <Form />
   </Styles>
 );
}